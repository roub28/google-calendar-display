import { getGcalData } from 'components/getGcalData'

export default async function Page() {
  const data = await getGcalData()
  const summaryElements = data.items.map((item) => (
    <div key={item.id}>
      Summary: {item.summary}
    </div>
  ));
  
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div>
        {summaryElements}
      </div>
    </div>

  )
}