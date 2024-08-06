// import { drizzle } from 'drizzle-orm/postgres-js'
// import { migrate } from 'drizzle-orm/postgres-js/migrator'
// import postgres from 'postgres'
// const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 })
// async function main() {
//   try {
//     await migrate(drizzle(migrationClient), {
//       migrationsFolder: './src/drizzle/migrations',
//     })
//     console.log('Migration completed')
//   } catch (error) {
//     console.error('Error during migration:', error)
//     process.exit(1)
//   }
//   await migrationClient.end()
// }

import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import { migrate } from 'drizzle-orm/neon-http/migrator'
const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)
const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' })
    console.log('Migration completed')
  } catch (error) {
    console.error('Error during migration:', error)
    process.exit(1)
  }
}
main()
