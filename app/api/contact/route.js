import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, validateContactPayload } from "../../../lib/contact-validate";

export const runtime = "nodejs";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn("[contact] RECAPTCHA_SECRET_KEY not set — skipping reCAPTCHA verification.");
    return { ok: true, skipped: true };
  }
  if (!token || typeof token !== "string") {
    return { ok: false, reason: "missing_token" };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const data = await res.json();
  if (!data.success) {
    return { ok: false, reason: "recaptcha_failed" };
  }

  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
  const score = typeof data.score === "number" ? data.score : 0;
  if (score < minScore) {
    return { ok: false, reason: "recaptcha_low_score", score };
  }

  return { ok: true, score };
}

function getSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ error: "Unable to send message." }, { status: 400 });
  }

  const { ok, errors, values } = validateContactPayload({
    name: body.name,
    email: body.email,
    message: body.message,
  });

  if (!ok) {
    return NextResponse.json({ error: "Validation failed.", fields: errors }, { status: 422 });
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const remoteIp = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "";

  const recaptcha = await verifyRecaptcha(body.recaptchaToken, remoteIp);
  if (!recaptcha.ok) {
    return NextResponse.json({ error: "Spam check failed. Please try again." }, { status: 400 });
  }

  const to = process.env.CONTACT_FORM_TO_EMAIL;
  if (!to) {
    console.error("[contact] CONTACT_FORM_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Server email is not configured." }, { status: 503 });
  }

  const transporter = getSmtpTransporter();
  if (!transporter) {
    console.error("[contact] SMTP_HOST / SMTP_USER / SMTP_PASS not configured.");
    return NextResponse.json({ error: "Server email is not configured." }, { status: 503 });
  }

  const from = process.env.CONTACT_FORM_FROM_EMAIL || process.env.SMTP_USER;

  const safeName = escapeHtml(values.name);
  const safeEmail = escapeHtml(values.email);
  const safeMessage = escapeHtml(values.message).replace(/\n/g, "<br/>");

  const html = `
    <!DOCTYPE html>
    <html><body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
      <hr/>
      <p style="font-size:12px;color:#666">Sent from Icecube headless contact form</p>
    </body></html>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: values.email,
      subject: `Contact form: ${values.name}`,
      text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      html,
    });
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
