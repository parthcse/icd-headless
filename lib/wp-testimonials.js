import { stripHtml } from "./wp-text";

export const FALLBACK_AVATAR = "/images/client.png";

export const FALLBACK_TESTIMONIAL = {
  id: "fallback",
  quote:
    "When we set out to rebuild all six of our websites into a WordPress with WooCommerce framework, we knew we would need a business partner that would be with us for the long haul.",
  name: "Christian Marcello",
  designation: "COO at Werks Company. LLC",
  avatar: FALLBACK_AVATAR,
  avatarAlt: "",
};

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
