import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await sql`create extension if not exists pgcrypto`.execute(db);

  await db.schema
    .createTable("projects")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("slug", "text", (col) => col.notNull().unique())
    .addColumn("summary", "text", (col) => col.notNull())
    .addColumn("description", "text", (col) => col.notNull())
    .addColumn("cover_image_key", "text")
    .addColumn("tags", sql`text[]`, (col) => col.notNull().defaultTo(sql`'{}'`))
    .addColumn("links", "jsonb", (col) => col.notNull().defaultTo(sql`'{}'`))
    .addColumn("start_date", "date")
    .addColumn("end_date", "date")
    .addColumn("featured", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("sort_order", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .createTable("experience")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("company", "text", (col) => col.notNull())
    .addColumn("role", "text", (col) => col.notNull())
    .addColumn("highlights", sql`text[]`, (col) =>
      col.notNull().defaultTo(sql`'{}'`),
    )
    .addColumn("start_date", "date", (col) => col.notNull())
    .addColumn("end_date", "date")
    .addColumn("sort_order", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .createTable("skills")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("category", "text", (col) => col.notNull())
    .addColumn("level", "integer")
    .addColumn("sort_order", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .createTable("albums")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("slug", "text", (col) => col.notNull().unique())
    .addColumn("description", "text")
    .addColumn("cover_photo_id", "uuid")
    .addColumn("sort_order", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("published", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .createTable("photos")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("album_id", "uuid", (col) =>
      col.notNull().references("albums.id").onDelete("cascade"),
    )
    .addColumn("r2_key", "text", (col) => col.notNull())
    .addColumn("thumb_key", "text", (col) => col.notNull())
    .addColumn("width", "integer", (col) => col.notNull())
    .addColumn("height", "integer", (col) => col.notNull())
    .addColumn("caption", "text")
    .addColumn("taken_at", "timestamptz")
    .addColumn("camera", "text")
    .addColumn("sort_order", "integer", (col) => col.notNull().defaultTo(0))
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .alterTable("albums")
    .addForeignKeyConstraint(
      "albums_cover_photo_id_fkey",
      ["cover_photo_id"],
      "photos",
      ["id"],
      (cb) => cb.onDelete("set null"),
    )
    .execute();

  // Phase 2 (blog) — created now so the schema doesn't need an awkward
  // later migration, but no UI/routes are built against these yet.
  await db.schema
    .createTable("posts")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("slug", "text", (col) => col.notNull().unique())
    .addColumn("excerpt", "text")
    .addColumn("content_md", "text", (col) => col.notNull().defaultTo(""))
    .addColumn("cover_image_key", "text")
    .addColumn("published", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("published_at", "timestamptz")
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();

  await db.schema
    .createTable("tags")
    .addColumn("id", "uuid", (col) =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("name", "text", (col) => col.notNull().unique())
    .addColumn("slug", "text", (col) => col.notNull().unique())
    .execute();

  await db.schema
    .createTable("post_tags")
    .addColumn("post_id", "uuid", (col) =>
      col.notNull().references("posts.id").onDelete("cascade"),
    )
    .addColumn("tag_id", "uuid", (col) =>
      col.notNull().references("tags.id").onDelete("cascade"),
    )
    .addPrimaryKeyConstraint("post_tags_pkey", ["post_id", "tag_id"])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("post_tags").execute();
  await db.schema.dropTable("tags").execute();
  await db.schema.dropTable("posts").execute();
  await db.schema
    .alterTable("albums")
    .dropConstraint("albums_cover_photo_id_fkey")
    .execute();
  await db.schema.dropTable("photos").execute();
  await db.schema.dropTable("albums").execute();
  await db.schema.dropTable("skills").execute();
  await db.schema.dropTable("experience").execute();
  await db.schema.dropTable("projects").execute();
}
