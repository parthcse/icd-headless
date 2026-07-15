// Sticky bottom-LEFT WhatsApp call-to-action with an attention-grabbing pulse.
// Kept on the left because the JivoChat widget docks itself bottom-right.
// Static markup (no hooks) → server component. Styles are self-contained so the
// widget works without rebuilding Tailwind's output.css.
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=919106060593";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        .icd-wa-fab {
          position: fixed;
          left: 28px;
          bottom: 28px;
          z-index: 110;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 9999px;
          background-color: #1f1f1f;
          animation: icdWaPulse 2s ease-out infinite;
          transition: transform 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .icd-wa-fab:hover,
        .icd-wa-fab:focus-visible {
          transform: scale(1.07);
          outline: none;
        }
        .icd-wa-fab img {
          width: 25px;
          height: 25px;
          display: block;
        }
        @keyframes icdWaPulse {
          0%   { box-shadow: 0 6px 18px rgba(0,0,0,0.30), 0 0 0 0 rgba(241,126,63,0.55); }
          70%  { box-shadow: 0 6px 18px rgba(0,0,0,0.30), 0 0 0 18px rgba(241,126,63,0); }
          100% { box-shadow: 0 6px 18px rgba(0,0,0,0.30), 0 0 0 0 rgba(241,126,63,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .icd-wa-fab { animation: none; box-shadow: 0 6px 18px rgba(0,0,0,0.30); }
        }
      `}</style>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="icd-wa-fab"
      >
        <img src="/assets/icons/whatsapp-icon-white.svg" alt="WhatsApp" />
      </a>
    </>
  );
}
