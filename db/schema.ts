import { pgTable, text, jsonb, integer, timestamp } from 'drizzle-orm/pg-core';
export const siteContent = pgTable('site_content', {
  id: text().primaryKey(),
  content: jsonb().notNull(),
  revision: integer().notNull().default(1),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});
