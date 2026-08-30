import * as path from "node:path";
import { promises as fs } from "node:fs";
import { config as loadEnv } from "dotenv";
import { Kysely, PostgresDialect } from "kysely";
import { FileMigrationProvider, Migrator } from "kysely/migration";
import { Pool } from "pg";

loadEnv({ path: path.join(__dirname, "..", ".env.local") });

async function main() {
  const direction = process.argv[2];
  if (direction !== "up" && direction !== "down") {
    console.error("Usage: tsx scripts/migrate.ts <up|down>");
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set (checked .env.local)");
    process.exit(1);
  }

  const db = new Kysely<any>({
    dialect: new PostgresDialect({
      pool: new Pool({ connectionString: process.env.DATABASE_URL }),
    }),
  });

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, "..", "db", "migrations"),
    }),
  });

  const { error, results } =
    direction === "up"
      ? await migrator.migrateToLatest()
      : await migrator.migrateDown();

  for (const result of results ?? []) {
    if (result.status === "Success") {
      console.log(`✔ ${result.migrationName} (${result.direction})`);
    } else if (result.status === "Error") {
      console.error(`✘ ${result.migrationName} (${result.direction})`);
    }
  }

  await db.destroy();

  if (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
