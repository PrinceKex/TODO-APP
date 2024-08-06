'use server'
// import { neon } from '@neondatabase/serverless'

// export async function getData() {
//   const sql = neon(process.env.DATABASE_URL as string)
//   const data = await sql`SELECT version()`
//   return data
// }

import { eq, not } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/db/drizzle'
import { todoTable } from '@/db/schema'
export const getData = async () => {
  const data = await db.select().from(todoTable)
  return data
}
export const addTodo = async (id: string, value: string) => {
  await db.insert(todoTable).values({
    id: id,
    value: value,
  })
}
export const deleteTodo = async (id: string) => {
  await db.delete(todoTable).where(eq(todoTable.id, id))
  revalidatePath('/')
}
export const toggleTodo = async (id: string) => {
  await db
    .update(todoTable)
    .set({
      done: not(todoTable.done),
    })
    .where(eq(todoTable.id, id))
  revalidatePath('/')
}
export const editTodo = async (id: string, value: string) => {
  await db
    .update(todoTable)
    .set({
      value: value,
    })
    .where(eq(todoTable.id, id))
  revalidatePath('/')
}
