#!/usr/bin/env node
import { cpSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const templateDir = path.join(root, "problems", "_template");

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run new -- <problem-slug>");
  console.error("Example: npm run new -- valid-parentheses");
  process.exit(1);
}

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug "${slug}" — use lowercase kebab-case, e.g. valid-parentheses`);
  process.exit(1);
}

const targetDir = path.join(root, "problems", slug);

if (existsSync(targetDir)) {
  console.error(`Problem "${slug}" already exists at problems/${slug}`);
  process.exit(1);
}

cpSync(templateDir, targetDir, { recursive: true });

console.log(`Created problems/${slug}/`);
console.log(`  1. Fill in problems/${slug}/solution.ts`);
console.log(`  2. Add cases to problems/${slug}/cases.ts`);
console.log(`  3. Run: npm test -- ${slug}`);
