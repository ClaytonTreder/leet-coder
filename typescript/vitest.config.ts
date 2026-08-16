import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["problems/**/*.test.ts"],
    // _template is scaffolding to copy from, not a runnable problem.
    exclude: ["problems/_template/**", "node_modules/**"],
  },
});
