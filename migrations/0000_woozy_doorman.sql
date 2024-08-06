CREATE TABLE IF NOT EXISTS "todo" (
	"id" uuid PRIMARY KEY NOT NULL,
	"value" varchar(256) NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
