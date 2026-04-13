import { Fragment } from "react";

const WORDS = ["About", "Icecube"];

/**
 * WPB-style per-character reveal (charsAnimIn). Parent must include
 * .splitting .wpb_animate_when_almost_visible .charsAnimIn; common-next.js adds
 * .animated and .wpb_start_animation when the heading enters the viewport.
 */
export default function AboutCharHeading() {
  let charIndex = 0;
  const wordTotal = WORDS.length;
  const charTotal = WORDS.join("").length;

  return (
    <h1
      className="about-char-heading splitting main-title vc_custom_heading wpb_animate_when_almost_visible wpb_charsAnimIn charsAnimIn pb-1 text-center text-white md:pb-2"
      style={{
        "--word-total": wordTotal,
        "--char-total": charTotal,
        color: "#ffffff",
      }}
      aria-label={`${WORDS.join(" ")}`}
    >
      {WORDS.map((word, wi) => (
        <Fragment key={word}>
          <span className="word" data-word={word} style={{ "--word-index": wi }}>
            {word.split("").map((ch, i) => {
              const idx = charIndex++;
              return (
                <span key={i} className="char" data-char={ch} style={{ "--char-index": idx }}>
                  {ch}
                </span>
              );
            })}
          </span>
          {wi < WORDS.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
