import { getData } from '@/actions/action'
import Todos from '@/components/todos'

export default async function Home() {
  const data = await getData()
  return <Todos todos={data} />
}
