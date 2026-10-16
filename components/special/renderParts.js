import { Fragment } from "react";
import { linkAttrs } from "@/lib/link-attrs";

/**
 * Rich-text renderer for the special AI landing pages. A field can be a plain
 * string or an array of: string | {bold} | {accent} (brand color) | {text, href}.
 * External http(s) links open in a new tab.
 */
export default function renderParts(parts) {
  if (!Array.isArray(parts)) return parts;
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold text-white">{part.bold}</strong>
    ) : part.accent ? (
      <span key={i} className="text-primary">{part.accent}</span>
    ) : (
      <a key={i} href={part.href} {...linkAttrs(part.href)} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}
