import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './migrations',
  //driver: 'postgres',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
})
