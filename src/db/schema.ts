import { boolean, pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const todoTable = pgTable('todo', {
  id: uuid('id').primaryKey(),
  value: varchar('value', { length: 256 }).notNull(),
  done: boolean('done').default(false).notNull(),
})
