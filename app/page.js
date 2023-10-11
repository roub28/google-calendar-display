// Todo : Get Calendar attachment file through GoogleDriveAPI

// Manage style to adapt to bigger viewports

import { getGcalData } from 'components/getGcalData'
import { EventCard } from 'components/EventCard'
import Image from 'next/image'

export default async function Page() {
  const allEvents = await getGcalData()
  
  return (
    <div>
      <header className="flex flex-row justify-center space-x-4 p-4">
        <Image 
          src="logo.svg" // Route of the image file
          height={50} // Desired size with correct aspect ratio
          width={50} // Desired size with correct aspect ratio
          alt="Logo"
        />
        <h1 className="text-4xl font-bold text-gray-800">My Third Place Events</h1>
      </header>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:items-start">
        {allEvents.map((eventData) => (
            <EventCard key={eventData.id} eventData={eventData} />
          ))}
      </div>
    </div>
  )
}