// This component display the start time of the event

import { format } from 'date-fns';

export function EventStart({ dateString }) {
    return (
      <time dateTime={dateString} className="text-md font-bold text-gray-400 p-4">
        {format(dateString, 'eee. LLLL d, yyyy - HH:mm')}
      </time>);
  }