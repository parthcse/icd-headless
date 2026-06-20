import { stripHtml } from "./wp-text";

// Used as the avatar when a testimonial node has no featured image (see mapTestimonialNode).
export const FALLBACK_AVATAR = "/assets/icons/user-avatar.svg";

function designationFromNode(node) {
  const rawNested = node.testimonials;
  const group =
    rawNested == null
      ? null
      : Array.isArray(rawNested)
        ? rawNested[0]
        : rawNested;
  const raw =
    group && typeof group === "object"
      ? group.tm_designation ?? group.tmDesignation
      : undefined;
  if (raw == null || raw === "") return "";
  return stripHtml(String(raw));
}

export function mapTestimonialNode(node) {
  const descriptionField = node.description != null ? String(node.description) : "";
  const quote =
    stripHtml(descriptionField) || stripHtml(node.content) || stripHtml(node.title);
  return {
    id: node.id,
    name: stripHtml(node.title) || "Client",
    designation: designationFromNode(node),
    quote,
    avatar: node.featuredImage?.node?.sourceUrl || FALLBACK_AVATAR,
    avatarAlt: node.featuredImage?.node?.altText || "",
  };
}
