import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Kysely migrations and the migration runner operate on a schema-less
    // Kysely<any> per Kysely's own recommended pattern.
    files: ["db/migrations/**/*.ts", "scripts/migrate.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // Turns off ESLint stylistic rules that would conflict with Prettier —
  // must stay last so nothing after it re-enables them.
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
