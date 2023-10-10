// This component display the card with all informations of the event

import { EventImage } from 'components/EventImage'
import { EventTitle } from 'components/EventTitle'
import { EventStart } from 'components/EventStart'

export function EventCard({eventData}) {
    return (
      <div className="bg-blue-500 rounded-lg mb-4 max-w-screen-sm my-4 mx-4">
        <EventImage imageId={eventData.image} />
        <EventTitle titleString={eventData.title} />
        <EventStart dateString={eventData.start} />
      </div>
    );
  }