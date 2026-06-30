const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3 8.5h3.9V22H3zM9.5 8.5h3.7v1.84h.05c.52-.94 1.8-1.94 3.7-1.94 3.96 0 4.7 2.45 4.7 5.64V22h-3.9v-6.13c0-1.46-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25V22H9.5z" />
  </svg>
);

export default function AuthorProfileCard({ info }) {
  return (
    <div className="rounded-2xl border border-[#272727] bg-black-light p-6 text-center lg:p-7">
      {info.avatar ? (
        <img
          src={info.avatar}
          alt={info.name}
          className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-primary/30"
        />
      ) : (
        <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/15 text-3xl font-bold text-primary">
          {info.name.charAt(0)}
        </span>
      )}

      <h2 className="font-30 mt-4 font-semibold leading-tight">{info.name}</h2>
      {info.role && <p className="mt-1.5 text-base font-semibold text-primary">{info.role}</p>}

      {info.linkedin && (
        <a
          href={info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${info.name} on LinkedIn`}
          className="mx-auto mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <LinkedInIcon />
        </a>
      )}

      {info.expertise?.length > 0 && (
        <div className="mt-6 border-t border-white/10 pt-6 text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {info.expertise.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 to-primary/[0.04] px-3 py-1 text-sm text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
