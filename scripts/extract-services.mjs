import fs from "node:fs";

const path = new URL("../../Design/tailwind/index.html", import.meta.url);
const h = fs.readFileSync(path, "utf8");
const start = h.indexOf("<!--Start home services-->");
const end = h.indexOf("<!--End home services-->");
let s = h.slice(start, end);
s = s.replace(/class=/g, "className=");
s = s.replace(/<br>/gi, "<br />");
s = s.replace(/style="opacity: 1;"/g, "style={{ opacity: 1 }}");
s = s.replace(/<!--[\s\S]*?-->/g, "");
const out = new URL("../components/home/_ServicesSection.fragment.txt", import.meta.url);
fs.writeFileSync(out, s.trim());
console.log("wrote", out.pathname, "len", s.length);
