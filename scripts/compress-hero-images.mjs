import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOTS = [
 "public/hero",
 "public/images/pages/about",
 "public/images/pages/blog",
 "public/images/pages/faq",
 "public/images/pages/projects",
 "public/images/pages/services",
];

function walk(dir, acc = []) {
 if (!fs.existsSync(dir)) return acc;
 for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
  const p = path.join(dir, ent.name);
  if (ent.isDirectory()) walk(p, acc);
  else if (/\.png$/i.test(ent.name)) acc.push(p);
 }
 return acc;
}

function shouldCompress(file) {
 const n = file.replace(/\\/g, "/");
 if (n.includes("/blog/version")) return false;
 if (n.includes("/blog/") && !/hero(-mobile)?\.png$/i.test(n)) return false;
 if (n.endsWith("/public/hero/veltstack.png")) return false;
 return (
  /hero(-mobile)?\.png$/i.test(n) ||
  n.includes("/public/hero/") ||
  n.includes("/images/pages/projects/")
 );
}

const files = ROOTS.flatMap((r) => walk(r)).filter(shouldCompress);

console.log(`Compressing ${files.length} hero PNGs → WebP`);

for (const file of files) {
 const before = fs.statSync(file).size;
 const isMobile = /mobile/i.test(path.basename(file));
 const maxW = isMobile ? 960 : 1600;
 const out = file.replace(/\.png$/i, ".webp");
 const tmp = `${out}.tmp`;

 await sharp(file)
  .rotate()
  .resize({ width: maxW, withoutEnlargement: true })
  .webp({ quality: 68, effort: 6 })
  .toFile(tmp);

 fs.renameSync(tmp, out);
 const after = fs.statSync(out).size;
 console.log(
  `${path.relative("public", out)} ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`,
 );
}

if (fs.existsSync("public/hero/veltstack.webp")) {
 await sharp("public/hero/veltstack.webp")
  .resize({ width: 1200, withoutEnlargement: true })
  .png({ compressionLevel: 9, quality: 70 })
  .toFile("public/hero/veltstack.png");
 console.log(
  `OG public/hero/veltstack.png ${(fs.statSync("public/hero/veltstack.png").size / 1024).toFixed(0)}KB`,
 );
}
