const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload({ name, email, message }) {
  const errors = {};

  const n = typeof name === "string" ? name.trim() : "";
  if (!n) errors.name = "Name is required.";
  else if (n.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (n.length > 200) errors.name = "Name is too long.";

  const e = typeof email === "string" ? email.trim() : "";
  if (!e) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(e)) errors.email = "Enter a valid email address.";

  const m = typeof message === "string" ? message.trim() : "";
  if (!m) errors.message = "Message is required.";
  else if (m.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (m.length > 10000) errors.message = "Message is too long.";

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    values: { name: n, email: e, message: m },
  };
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
