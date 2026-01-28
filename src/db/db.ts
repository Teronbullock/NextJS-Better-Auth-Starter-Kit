import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { sql } from 'drizzle-orm';
// import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);

// Optional: Export a function to test connection when needed
export const testDbConnection = async () => {
  try {
    await db.execute(sql`SELECT 1`);
    console.log('Database connection established');
    return true;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
};
