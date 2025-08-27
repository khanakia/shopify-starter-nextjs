import '@shopify/shopify-api/adapters/web-api';
import { DrizzleSessionStoragePostgres } from '@shopify/shopify-app-session-storage-drizzle';
import { db } from './config';
import { sessionTable } from './schema';
export const dbSessionStorage = new DrizzleSessionStoragePostgres(db, sessionTable);
