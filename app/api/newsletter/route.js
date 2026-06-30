import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — pretend success so bots learn nothing.
  if (body.hp && String(body.hp).trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim();
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID || "6b6d8d4c0f";

  // Not configured yet (no API key) — accept gracefully so the UI works in the
  // meantime; the real subscribe starts the moment MAILCHIMP_API_KEY is set.
  if (!apiKey) {
    console.warn("[newsletter] MAILCHIMP_API_KEY not set — signup received:", email);
    return NextResponse.json({ ok: true, pending: true });
  }

  // Mailchimp API key format is "<key>-<dc>", e.g. "abc123-us21". The dc is the
  // subdomain for the API host.
  const dc = apiKey.split("-")[1];
  if (!dc) {
    console.error("[newsletter] MAILCHIMP_API_KEY missing datacenter suffix (…-usXX).");
    return NextResponse.json({ error: "Newsletter is misconfigured." }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        },
        // "pending" = double opt-in (Mailchimp emails a confirmation link).
        // Switch to "subscribed" for single opt-in.
        body: JSON.stringify({ email_address: email, status: "pending" }),
      }
    );

    const data = await res.json().catch(() => ({}));

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }
    // Already on the list — treat as success, not an error.
    if (data.title === "Member Exists") {
      return NextResponse.json({ ok: true, existing: true });
    }
    console.error("[newsletter] mailchimp error:", data.title, data.detail);
    return NextResponse.json({ error: "Could not subscribe right now. Please try again." }, { status: 502 });
  } catch (err) {
    console.error("[newsletter] request failed:", err);
    return NextResponse.json({ error: "Network error. Please try again." }, { status: 502 });
  }
}
