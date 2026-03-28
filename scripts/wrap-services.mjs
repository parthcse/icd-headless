import fs from "node:fs";

const frag = new URL("../components/home/_ServicesSection.fragment.txt", import.meta.url);
const inner = fs.readFileSync(frag, "utf8");
const out = `export default function ServicesSection() {
  return (
${inner
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
  );
}
`;
const dest = new URL("../components/home/ServicesSection.js", import.meta.url);
fs.writeFileSync(dest, out);
console.log("wrote ServicesSection.js");
