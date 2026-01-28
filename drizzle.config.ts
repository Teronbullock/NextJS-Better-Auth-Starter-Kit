import { defineConfig } from 'drizzle-kit';

const dbUrl = process.env.DATABASE_URL as string;

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema/auth.schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
});
