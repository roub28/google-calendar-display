// This component display the card with all informations of the event

import { EventImage } from 'components/EventImage'
import { EventTitle } from 'components/EventTitle'
import { EventStart } from 'components/EventStart'
import { EventDescription } from 'components/EventDescription'

export function EventCard({eventData}) {
    return (
      <div className="bg-gray-100 max-w-sm shadow-md rounded-lg mb-4 my-4 mx-4">
        <EventImage imageId={eventData.image} />
        <EventTitle titleString={eventData.title} />
        <EventStart dateString={eventData.start} />
        {eventData.description ? (
          <EventDescription descriptionString={eventData.description} />
        ) : null}
      </div>
    );
  }