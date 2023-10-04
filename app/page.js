import { getGcalData } from 'components/getGcalData'
import Image from 'next/image'

export default async function Page() {
  const data = await getGcalData()
  const summaryElements = data.items.map((item) => (
    <div class="basis-1/4" key={item.id}>
      Summary: {item.summary}
      {item.attachments ? (
          <Image
          src={`https://drive.google.com/uc?export=view&id=${item.attachments[0].fileUrl.split(/[=&]/)[1]}`}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      ) : null}
    </div>
  ));
  
  return (
    <div>
      <h1 className="text-sm ...">Events to come</h1>
      <div className="flex flex-row">
        {summaryElements}
      </div>
    </div>

  )
}