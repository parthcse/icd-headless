import fs from "node:fs";

const htmlPath = new URL("../../Design/tailwind/index.html", import.meta.url);
const h = fs.readFileSync(htmlPath, "utf8");

function toJsxFragment(s) {
  let x = s;
  x = x.replace(/class=/g, "className=");
  x = x.replace(/<br>/gi, "<br />");
  x = x.replace(/style="opacity: 1;"/g, "style={{ opacity: 1 }}");
  x = x.replace(/<!--[\s\S]*?-->/g, "");
  return x.trim();
}

function extract(startComment, endComment) {
  const a = h.indexOf(startComment);
  const b = h.indexOf(endComment);
  if (a === -1 || b === -1) throw new Error(`Missing ${startComment} or ${endComment}`);
  return toJsxFragment(h.slice(a, b));
}

function wrap(componentName, fragment) {
  const body = fragment
    .split("\n")
    .map((line) => "    " + line)
    .join("\n");
  return `export default function ${componentName}() {
  return (
${body}
  );
}
`;
}

const sections = [
  ["SuccessStoriesSection", "<!--Start home our client-->", "<!--End home our client-->"],
  ["WhyChooseUsSection", "<!--Start home why choose -->", "<!--End home why choose -->"],
  ["HappyCustomersSection", "<!--Start home customer -->", "<!--end home customer -->"],
  ["TrustedClientsSection", "<!--Start home out client -->", "<!--End home out client -->"],
  ["LatestNewsSection", "<!--Start home blog -->", "<!--End home blog -->"],
  ["GetQuoteSection", "<!--Start home contant -->", "<!--End home contant -->"],
  ["WeServeSection", "<!--Start home countries serve -->", "<!--End home countries serve -->"],
  ["Footer", "<!--Start footer -->", "<!--End footer -->"],
];

const outDir = new URL("../components/home/", import.meta.url);
const footerDir = new URL("../components/layout/", import.meta.url);

for (const [name, start, end] of sections) {
  const frag = extract(start, end);
  const code = wrap(name, frag);
  const dir = name === "Footer" ? footerDir : outDir;
  const file = name === "Footer" ? "Footer.js" : `${name}.js`;
  fs.writeFileSync(new URL(file, dir), code);
  console.log("wrote", file);
}
