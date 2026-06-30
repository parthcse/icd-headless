import { getAuthorInfo } from "@/lib/authors";
import { stripHtml } from "@/lib/wp-text";

export default function BlogAuthorBox({ authorNode }) {
  if (!authorNode) return null;
  const slug = authorNode.slug || (authorNode.uri || "").match(/\/author\/([^/]+)/)?.[1] || null;
  const info = getAuthorInfo(slug, stripHtml(authorNode.name));
  if (!info.bio) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-[#272727] bg-black-light p-6 text-center sm:flex-row sm:items-start sm:p-7 sm:text-left">
      {info.avatar ? (
        <img
          src={info.avatar}
          alt={info.name}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-primary/30 sm:h-24 sm:w-24"
        />
      ) : (
        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/15 text-2xl font-bold text-primary sm:h-24 sm:w-24">
          {info.name.charAt(0)}
        </span>
      )}

      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">About the author</p>
        <h3 className="font-22 mt-1 font-semibold">{info.name}</h3>
        {info.role && <p className="mt-1 text-base font-semibold text-primary">{info.role}</p>}
        <p className="mt-3 leading-relaxed text-white/80">{info.bio}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          {info.slug && (
            <a
              href={`/blog/author/${info.slug}/`}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/[0.04] px-4 text-sm font-semibold text-white/85 transition-colors hover:border-primary/40 hover:text-white"
            >
              View all posts by {info.name} →
            </a>
          )}
          {info.linkedin && (
            <a
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${info.name} on LinkedIn`}
              title={`${info.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 8.5h3.9V22H3zM9.5 8.5h3.7v1.84h.05c.52-.94 1.8-1.94 3.7-1.94 3.96 0 4.7 2.45 4.7 5.64V22h-3.9v-6.13c0-1.46-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25V22H9.5z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
