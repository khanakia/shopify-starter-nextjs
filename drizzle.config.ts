import 'dotenv/config';
import type { Config } from 'drizzle-kit';

console.log(process.env.DATABASE_URL);
export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} as Config;
