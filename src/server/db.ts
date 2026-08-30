import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { DB } from "../../db/types";

declare global {
  var __db__: Kysely<DB> | undefined;
}

function createDb() {
  return new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({ connectionString: process.env.DATABASE_URL }),
    }),
    plugins: [new CamelCasePlugin()],
  });
}

// Reuse the connection pool across hot reloads in dev.
export const db = globalThis.__db__ ?? createDb();
if (process.env.NODE_ENV !== "production") {
  globalThis.__db__ = db;
}
