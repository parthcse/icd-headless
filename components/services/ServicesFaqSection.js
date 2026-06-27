"use client";

import { Fragment, useState } from "react";

function renderParts(parts) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <Fragment key={i}>{part}</Fragment>
    ) : part.bold ? (
      <strong key={i} className="font-semibold">{part.bold}</strong>
    ) : (
      <a key={i} href={part.href} className="text-primary font-semibold inline underline">{part.text}</a>
    )
  );
}

export default function ServicesFaqSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="services-faq full-section">
      <div className="container">
        {(data.eyebrow || data.title || data.subtitle) && (
          <div className="heading-wrap animate fadeUp">
            <h3 className="font-48">{data.eyebrow}</h3>
            <h2 className="main-title pb-2">{data.title}</h2>
            {data.subtitle && <p className="mx-auto max-w-5xl">{data.subtitle}</p>}
          </div>
        )}
        <div id="services-accordion" className="space-y-4">
          {data.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`services-accordion-item border border-[#333333] px-7 py-5${isOpen ? " active" : ""}`}>
                <div
                  className="services-accordion-header transition-colors duration-300 ease-in-out flex justify-between items-center cursor-pointer gap-6"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <h3 className="font-22 mb-0 font-bold">{faq.question}</h3>
                  <button
                    type="button"
                    className={`services-accordion-icon transition-transform duration-300 ease-in-out font-22 w-[1.6em] h-[1.6em] rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 relative${isOpen ? " bg-primary rotate-180" : ""}`}
                    aria-expanded={isOpen}
                    tabIndex={-1}
                  >
                    <span className="absolute w-1/2 h-[0.12em] bg-black" />
                    <span className={`icon-line-vertical absolute w-[0.1em] h-1/2 bg-black transition-opacity duration-300${isOpen ? " opacity-0" : ""}`} />
                  </button>
                </div>
                <div className={`services-accordion-content grid [grid-template-rows:0fr] transition-[grid-template-rows,opacity,margin] duration-[400ms,300ms,300ms] ease-in-out opacity-0 leading-relaxed space-y-4${isOpen ? " [grid-template-rows:1fr] opacity-100 mt-1" : ""}`}>
                  <div className="text-box overflow-hidden">
                    {faq.answerHtml ? (
                      <div className="rich-answer space-y-3" dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />
                    ) : (
                      <>
                        {faq.answer && <p>{Array.isArray(faq.answer) ? renderParts(faq.answer) : faq.answer}</p>}
                        {faq.answerList && (
                          <ul className="list-disc pl-5 space-y-1">
                            {faq.answerList.map((item, j) => <li key={j}>{item}</li>)}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
