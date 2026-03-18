export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  className = "",
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-left",
        className,
      ].join(" ")}
      role="alert"
    >
      <p className="text-sm font-semibold text-orange-300">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-300">{message}</p>
    </div>
  );
}

