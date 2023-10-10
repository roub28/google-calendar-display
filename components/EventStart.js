// This component display the start time of the event

import { parseISO, format } from 'date-fns';

export function EventStart({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
  }