"use client";

import { useEffect, useRef } from "react";

/**
 * Animated WhatsApp quoting demo for the hero — real HTML/CSS, not a GIF.
 *
 * Ported from the live page. Kept as markup because the chat is 12-14px text:
 * a GIF would cap at 256 colours with no anti-aliasing (fuzzy type), weigh
 * megabytes above the fold (hurting LCP), and couldn't reflow on mobile.
 * This is a few KB and stays crisp at any DPR.
 *
 * The bubbles are staged with pure CSS keyframe delays; JS only adds `.is-live`
 * once the phone scrolls into view, so the sequence starts when it's seen rather
 * than playing to an empty screen. Honours prefers-reduced-motion.
 */
export default function WhatsappChatDemo() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: show the finished state immediately, no staging.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-static");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-live");
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .icd-wa{--chat-bg:#E6DDD3;--in:#fff;--out:#DCF8C6;--deep:#075E54;
          display:flex;justify-content:center;perspective:1400px}
        .icd-wa .fone{width:330px;max-width:100%;background:#0c0c0d;border-radius:42px;padding:11px;
          position:relative;transform:rotateY(-7deg) rotateX(2deg);
          box-shadow:0 30px 70px rgba(0,0,0,.45)}
        @media(max-width:980px){.icd-wa .fone{transform:none}}
        .icd-wa .notch{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:120px;height:26px;
          background:#0c0c0d;border-radius:0 0 16px 16px;z-index:5}
        .icd-wa .screen{background:var(--chat-bg);border-radius:33px;overflow:hidden;position:relative}
        .icd-wa .head{background:var(--deep);color:#fff;display:flex;align-items:center;gap:11px;padding:34px 15px 11px}
        .icd-wa .ava{width:38px;height:38px;border-radius:50%;background:#cfe9d9;display:grid;place-items:center;flex-shrink:0}
        .icd-wa .ava svg{width:20px;height:20px}
        .icd-wa .who{line-height:1.2;min-width:0}
        .icd-wa .who b{font-weight:600;font-size:14.5px;display:block}
        .icd-wa .who small{font-size:11.5px;opacity:.85;display:flex;align-items:center;gap:5px}
        .icd-wa .who small i{width:6px;height:6px;border-radius:50%;background:#7CFFB0;display:inline-block;box-shadow:0 0 8px #7CFFB0}
        .icd-wa .botpill{margin-left:auto;font-size:9.5px;font-weight:600;background:rgba(255,255,255,.16);
          padding:4px 8px;border-radius:999px;letter-spacing:.04em}
        /* min-height is a floor that reserves space so the phone doesn't grow as
           bubbles animate in — sized to just fit the finished thread, no dead space. */
        .icd-wa .body{padding:13px 13px 10px;min-height:320px;display:flex;flex-direction:column;gap:7px;
          background-image:radial-gradient(rgba(255,255,255,.45) 1px,transparent 1px);background-size:18px 18px}
        .icd-wa .msg{max-width:80%;padding:8px 11px 7px;border-radius:11px;font-size:13.5px;line-height:1.42;
          box-shadow:0 1px 1px rgba(0,0,0,.07);position:relative;color:#0b1b16;opacity:0;transform:translateY(8px) scale(.97)}
        .icd-wa .msg.in{background:var(--in);align-self:flex-start;border-top-left-radius:3px}
        .icd-wa .msg.out{background:var(--out);align-self:flex-end;border-top-right-radius:3px}
        .icd-wa .msg .t{display:block;font-size:9.5px;color:#5b7a6b;text-align:right;margin-top:3px}
        .icd-wa .msg .t b{color:#34B7F1;font-weight:700;letter-spacing:-1px}
        .icd-wa .conv{display:inline-block;background:rgba(10,122,68,.10);color:var(--deep);font-weight:600;border-radius:6px;padding:0 5px}
        .icd-wa .typing{align-self:flex-start;background:#fff;border-radius:11px;border-top-left-radius:3px;
          padding:11px 13px;display:flex;gap:4px;opacity:0;box-shadow:0 1px 1px rgba(0,0,0,.07);
          max-height:60px;overflow:hidden;box-sizing:border-box}
        .icd-wa .typing i{width:7px;height:7px;border-radius:50%;background:#9bb0a3;animation:icdWaBlink 1.2s infinite}
        .icd-wa .typing i:nth-child(2){animation-delay:.2s}
        .icd-wa .typing i:nth-child(3){animation-delay:.4s}
        .icd-wa .quote{align-self:flex-start;background:#fff;border-radius:12px;border-top-left-radius:3px;width:84%;
          padding:11px;box-shadow:0 1px 2px rgba(0,0,0,.1);opacity:0;transform:translateY(8px) scale(.97)}
        .icd-wa .qh{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:600;color:var(--deep);letter-spacing:.04em}
        .icd-wa .qh .dot{width:7px;height:7px;border-radius:50%;background:#25D366}
        .icd-wa .line{display:flex;justify-content:space-between;font-size:12.5px;margin-top:8px;color:#22332c}
        .icd-wa .tot{border-top:1px dashed #d6e3da;margin-top:8px;padding-top:8px;font-size:13.5px;font-weight:700;
          display:flex;justify-content:space-between;color:#0b1b16}
        .icd-wa .btnq{margin-top:10px;background:var(--deep);color:#fff;border-radius:8px;text-align:center;
          padding:9px;font-weight:600;font-size:12.5px}
        .icd-wa .foot{display:flex;align-items:center;gap:8px;padding:8px 11px;background:var(--chat-bg)}
        .icd-wa .foot .box{flex:1;background:#fff;border-radius:999px;padding:9px 14px;font-size:12.5px;color:#9aa;
          box-shadow:0 1px 1px rgba(0,0,0,.06)}
        .icd-wa .foot .send{width:36px;height:36px;border-radius:50%;background:var(--deep);display:grid;place-items:center;flex-shrink:0}
        .icd-wa .foot .send svg{width:16px;height:16px}

        /* Staged reveal — starts only once .is-live is added (in view). */
        .icd-wa.is-live .msg.r1{animation:icdWaPop .4s ease forwards .3s}
        .icd-wa.is-live .typing{animation:icdWaPop .3s ease forwards .9s, icdWaAway .25s ease forwards 1.45s}
        .icd-wa.is-live .msg.r2{animation:icdWaPop .4s ease forwards 1.5s}
        .icd-wa.is-live .msg.r3{animation:icdWaPop .4s ease forwards 2.4s}
        .icd-wa.is-live .quote{animation:icdWaPop .5s ease forwards 3.4s}
        .icd-wa.is-live .msg.r4{animation:icdWaPop .4s ease forwards 4.3s}
        /* Reduced motion / no-JS: show the finished conversation, no movement. */
        .icd-wa.is-static .msg,.icd-wa.is-static .quote{opacity:1;transform:none}
        .icd-wa.is-static .typing{display:none}
        @keyframes icdWaPop{to{opacity:1;transform:translateY(0) scale(1)}}
        /* Collapse the typing bubble out of the flow after it fades, so it leaves no
           phantom gap. margin-top:-7px cancels one flex gap → msg1 and msg2 end up a
           single 7px apart, matching every other pair. */
        @keyframes icdWaAway{to{opacity:0;transform:translateY(-4px) scale(.95);
          max-height:0;padding-top:0;padding-bottom:0;margin-top:-7px}}
        @keyframes icdWaBlink{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
      `}</style>

      <div className="icd-wa" ref={ref} role="img" aria-label="Example WhatsApp conversation: a customer asks for a quote on 50 matte black 750ml bottles, the AI agent confirms stock and delivery, then returns a draft order for $425.00 with a checkout link.">
        <div className="fone">
          <span className="notch" />
          <div className="screen">
            <div className="head">
              <span className="ava">
                <svg viewBox="0 0 24 24" fill="none" stroke="#075E54" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
                </svg>
              </span>
              <span className="who">
                <b>Northwind Supply</b>
                <small><i />online · replies instantly</small>
              </span>
              <span className="botpill">AI AGENT</span>
            </div>

            <div className="body">
              <div className="msg out r1">Hi, can I get a quote for 50 of the Matte Black 750ml bottles?<span className="t">10:02 <b>✓✓</b></span></div>
              <div className="typing" aria-hidden="true"><i /><i /><i /></div>
              <div className="msg in r2">Got it — that&apos;s <span className="conv">50 × Steel Bottle, Matte Black 750ml</span>, in stock ✅. When do you need them delivered?<span className="t">10:02</span></div>
              <div className="msg out r3">By Friday please<span className="t">10:03 <b>✓✓</b></span></div>
              <div className="quote">
                <div className="qh"><span className="dot" /> DRAFT ORDER · #D1042 · READY</div>
                <div className="line"><span>Steel Bottle — Matte Black</span><b>50 × 750ml</b></div>
                <div className="line"><span>Your account price</span><b>$8.50 / unit</b></div>
                <div className="tot"><span>Total</span><span>$425.00</span></div>
                <div className="btnq">View &amp; checkout →</div>
              </div>
              <div className="msg in r4">Saved to your account 🚚 I&apos;ll remind you Thursday so it ships in time for Friday.<span className="t">10:03</span></div>
            </div>

            <div className="foot">
              <span className="box">Type a message…</span>
              <span className="send">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
