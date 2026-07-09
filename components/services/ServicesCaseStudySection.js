import { Fragment } from "react";
import { getCaseStudyNodesByIds } from "@/lib/wp-home-data";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} {...(/^https?:\/\//.test(part.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

const BTN_ARROW_PATH = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

function extractParagraphs(html) {
  const matches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => m[1].trim());
  if (matches.length) return matches.filter(Boolean);
  return html.trim() ? [html.trim()] : [];
}

function mapNodeToCaseStudyItem(node) {
  const fields = node.caseStudiesFields || {};
  return {
    href: node.slug ? `/case-studies/${node.slug}/` : "",
    image: node.featuredImage?.node?.sourceUrl || "",
    imageAlt: node.featuredImage?.node?.altText || fields.caseStudyTitle || node.title,
    clientName: fields.caseStudyTitle || node.title,
    metrics: (fields.caseStudyMetrics || []).map((m) => ({
      value: m.metricsValue,
      label: m.metricsLabel,
    })),
    testimonialParagraphs: extractParagraphs(fields.caseStudyShortDescription || ""),
    authorName: fields.caseStudyAuthorName,
    authorTitle: fields.caseStudyAuthorDesignation,
  };
}

/**
 * Case Study section. `data.postIds` is an array of WordPress `caseStudy`
 * post IDs fetched live via WPGraphQL (same by-IDs logic as the portfolio
 * section, against the `caseStudiesFields` ACF group).
 */
export default async function ServicesCaseStudySection({ data }) {
  const nodes = await getCaseStudyNodesByIds(data.postIds);
  const caseStudyItems = nodes.map(mapNodeToCaseStudyItem);

  if (!caseStudyItems.length) return null;

  return (
    <section className="services-case-studies text-center full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          {data.eyebrow && <h3 className="font-48">{data.eyebrow}</h3>}
          <h2 className="main-title pb-2">{data.title}</h2>
          {Array.isArray(data.subtitle)
            ? data.subtitle.map((p, i) => <p key={i} className="mx-auto max-w-5xl">{Array.isArray(p) ? renderParts(p) : p}</p>)
            : <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-small leading-normal">
          {caseStudyItems.map((item, i) => (
            <div key={i} className="column group">
              <figure className="overflow-hidden">
                {item.href ? (
                  <a href={item.href}>
                    <img
                      src={item.image}
                      alt={item.clientName}
                      className="w-full aspect-[1.16] object-cover transition-all duration-500 group-hover:scale-105 ease-out"
                    />
                  </a>
                ) : (
                  <img
                    src={item.image}
                    alt={item.clientName}
                    className="w-full aspect-[1.16] object-cover transition-all duration-500 group-hover:scale-105 ease-out"
                  />
                )}
              </figure>
              <h3 className="font-30 font-bold mb-0 pt-space-small">
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-primary">{item.clientName}</a>
                ) : (
                  item.clientName
                )}
              </h3>
              {item.metrics.length > 0 && (
                <div className="grid grid-cols-2 border-y border-white/15 my-[clamp(0.625rem,0.0481rem+1.60255vw,1.25rem)] py-[clamp(0.625rem,0.0481rem+1.60255vw,1.25rem)]">
                  {item.metrics.map((m, j) => (
                    <div key={j} className={`column px-1${j === 0 ? " border-r border-white/15" : ""}`}>
                      <p className="font-48 font-bold text-primary"><small>{m.value}</small></p>
                      <p className="font-semibold">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
              {(item.testimonialParagraphs.length > 0 || item.authorName) && (
                <div className="text-box space-y-4">
                  {item.testimonialParagraphs.map((p, k, arr) => {
                    const isFirst = k === 0;
                    const isLast = k === arr.length - 1;
                    const html = `${isFirst ? "“" : ""}${p}${isLast ? "”" : ""}`;
                    return <p key={k} dangerouslySetInnerHTML={{ __html: html }} />;
                  })}
                  {item.authorName && <p className="font-22 font-bold">{item.authorName}</p>}
                  {item.authorTitle && <p className="!m-0">{item.authorTitle}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
        {data.caseStudyCtaLabel && (
          <div className="btn-wrap text-center pt-space-mini">
            <a href={data.caseStudyCtaHref || "#"} className="btn btn-primary">
              {data.caseStudyCtaLabel}
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                <path d={BTN_ARROW_PATH} />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
