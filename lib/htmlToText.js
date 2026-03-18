/**
 * Convert WPGraphQL HTML strings into plain text for UI rendering.
 * WPGraphQL frequently returns ACF/text fields wrapped in <p>...</p>.
 */
export function htmlToText(html) {
  if (!html || typeof html !== "string") return "";

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFirstWords(text, maxWords = 10) {
  const clean = htmlToText(text);
  if (!clean) return "";
  const words = clean.split(" ");
  return words.slice(0, maxWords).join(" ");
}

export function extractFirstSentence(text) {
  const clean = htmlToText(text);
  if (!clean) return "";
  const parts = clean.split(/[.!?]\s/);
  return parts[0] ? parts[0].trim() : clean;
}

export function extractPercent(text) {
  const clean = htmlToText(text);
  if (!clean) return null;
  const match = clean.match(/([+\-]?\d+(?:\.\d+)?%)\b/);
  return match?.[1] || null;
}

