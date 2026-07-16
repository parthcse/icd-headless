"use client";

import { useEffect, useRef } from "react";

/**
 * Animated "store assistant" chat demo for the hero — real HTML/CSS, not a GIF.
 *
 * Ported from the live page, restyled for our dark theme (the live version is
 * light/blue). Kept as markup for the same reasons as WhatsappChatDemo: GIF
 * would fuzz the ~14px text, weigh megabytes above the fold, and not reflow.
 *
 * Messages reveal one at a time (750ms apart) once the card scrolls into view.
 * Honours prefers-reduced-motion by showing the finished thread immediately.
 */
const MESSAGE_STEP_MS = 750;

export default function StoreAssistantDemo() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const msgs = Array.from(el.querySelectorAll(".msg"));
    if (msgs.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      msgs.forEach((m) => m.classList.add("show"));
      return;
    }

    let timer;
    const play = () => {
      let i = 0;
      const next = () => {
        if (i < msgs.length) {
          msgs[i].classList.add("show");
          i += 1;
          timer = setTimeout(next, MESSAGE_STEP_MS);
        }
      };
      timer = setTimeout(next, 400);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style>{`
        .icd-sa{position:relative;background:#131417;border:1px solid rgba(255,255,255,.10);border-radius:22px;
          padding:18px;box-shadow:0 30px 70px rgba(0,0,0,.45)}
        .icd-sa::before{content:"";position:absolute;inset:0;border-radius:22px;padding:1px;pointer-events:none;
          background:linear-gradient(160deg,rgba(241,126,63,.55),transparent 60%);
          -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
          -webkit-mask-composite:xor;mask-composite:exclude}
        .icd-sa .head{display:flex;align-items:center;gap:10px;padding:4px 6px 15px;border-bottom:1px solid rgba(255,255,255,.10)}
        .icd-sa .av{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#F17E3F,#f9a870);
          display:grid;place-items:center;color:#111;flex:none}
        .icd-sa .av svg{width:19px;height:19px}
        .icd-sa .who{font-weight:600;color:#fff;font-size:14px;line-height:1.2}
        .icd-sa .who span{display:block;font-size:11px;color:#F17E3F;font-weight:500;margin-top:2px}
        .icd-sa .live{margin-left:auto;font-size:11px;color:#22c06a;display:flex;align-items:center;gap:6px;font-weight:600}
        .icd-sa .live::before{content:"";width:7px;height:7px;border-radius:50%;background:#22c06a;box-shadow:0 0 0 3px rgba(34,192,106,.2)}
        .icd-sa .stream{padding:16px 6px 4px;display:flex;flex-direction:column;gap:13px;min-height:320px}
        .icd-sa .msg{max-width:88%;opacity:0;transform:translateY(8px)}
        .icd-sa .msg.show{opacity:1;transform:none;transition:all .5s cubic-bezier(.2,.7,.3,1)}
        .icd-sa .msg.user{align-self:flex-end}
        .icd-sa .bubble{padding:11px 15px;border-radius:15px;font-size:14px;line-height:1.5}
        .icd-sa .msg.user .bubble{background:linear-gradient(135deg,#F17E3F,#f9a870);color:#141414;
          border-bottom-right-radius:5px;font-weight:500}
        .icd-sa .msg.bot .bubble{background:#1c1d21;color:#d6dae1;border:1px solid rgba(255,255,255,.10);border-bottom-left-radius:5px}
        .icd-sa .card-prod{margin-top:9px;background:#131417;border:1px solid rgba(255,255,255,.12);border-radius:12px;
          padding:11px;display:flex;gap:11px;align-items:center}
        .icd-sa .thumb{width:44px;height:44px;border-radius:9px;background:linear-gradient(135deg,#F17E3F,#c85a20);
          flex:none;position:relative;overflow:hidden}
        .icd-sa .thumb::after{content:"";position:absolute;inset:0;
          background:repeating-linear-gradient(90deg,rgba(255,255,255,.25) 0 2px,transparent 2px 7px)}
        .icd-sa .pname{font-weight:600;color:#fff;font-size:13px;line-height:1.25}
        .icd-sa .pmeta{font-size:11px;color:#F17E3F;margin-top:2px;font-weight:500}
        .icd-sa .tag-stock{display:inline-block;font-size:10px;color:#22c06a;border:1px solid rgba(34,192,106,.3);
          background:rgba(34,192,106,.08);border-radius:6px;padding:1px 7px;margin-top:5px;font-weight:600}
        .icd-sa .go{margin-left:auto;color:#F17E3F;flex:none}
        .icd-sa .foot{margin-top:13px;display:flex;align-items:center;gap:10px;background:#1c1d21;
          border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:11px 14px}
        .icd-sa .foot>span{color:#8b93a1;font-size:13.5px}
        .icd-sa .foot .send{margin-left:auto;width:30px;height:30px;border-radius:8px;
          background:linear-gradient(135deg,#F17E3F,#f9a870);display:grid;place-items:center;color:#141414;flex:none}
        .icd-sa .foot .send svg{width:15px;height:15px}
      `}</style>

      <div
        className="icd-sa"
        ref={ref}
        role="img"
        aria-label="Example conversation with the AI store assistant: a shopper asks for wireless earbuds with long battery life and gets a product card for the Pulse Pro at $129, then asks where order #10482 is and is told it shipped and is out for delivery."
      >
        <div className="head">
          <span className="av">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4z" />
              <path d="M5 21c0-3.6 3.1-6 7-6s7 2.4 7 6" />
            </svg>
          </span>
          <div className="who">
            Store Assistant<span>Powered by Icecube AI</span>
          </div>
          <div className="live">Online</div>
        </div>

        <div className="stream">
          <div className="msg user"><div className="bubble">Do you have wireless earbuds with long battery life?</div></div>
          <div className="msg bot">
            <div className="bubble">
              Yes — the Pulse Pro earbuds run about 30 hours with the charging case.
              <div className="card-prod">
                <span className="thumb" />
                <div>
                  <div className="pname">Pulse Pro Wireless Earbuds</div>
                  <div className="pmeta">SKU PWE-30 · $129</div>
                  <span className="tag-stock">In stock</span>
                </div>
                <span className="go">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </div>
          </div>
          <div className="msg user"><div className="bubble">Great — where&apos;s my order #10482?</div></div>
          <div className="msg bot"><div className="bubble">Order #10482 shipped yesterday and is out for delivery today. I&apos;ve emailed you the live tracking link. 📦</div></div>
        </div>

        <div className="foot">
          <span>Ask about a product, order or return…</span>
          <span className="send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
    </>
  );
}
