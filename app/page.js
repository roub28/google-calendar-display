import { getGcalData } from 'components/getGcalData'
import { EventCard } from 'components/EventCard'

export default async function Page() {
  const allEvents = await getGcalData()
  const firstEvent = {
    title: "Event Title", 
    image: "1NvBsXjVnMn3u1jriNhUnwFsbRGRIJZIo",
  };
  const secondEvent = allEvents[3]

  
  return (
    <div>
      <h1>Events to come ?</h1>
      <div className="flex flex-col">
        {allEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))}
      </div>
    </div>
  )
}