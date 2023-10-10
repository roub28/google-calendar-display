// This component connect to Google Calendar API

// Manage case where title is too long
// Add a default picture in public folder

export async function getGcalData() {
    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GCAL_ID}/events?key=${process.env.GCAL_API_KEY}`;
  
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' }); // change 'no-store' property in production mode
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await res.json();
  
      const allEvents = data.items.map((item) => {
        return {
          id: item.id,
          title: item.summary,
          image: item.attachments && item.attachments[0] ? item.attachments[0].fileId : process.env.DEFAULT_EVENT_IMAGE_ID,
          start: new Date(item.start.dateTime),
          description: item.description,
        };
      });

      allEvents.sort((a, b) => a.start - b.start);

      return allEvents;
    } catch (error) {
      throw new Error(`Error fetching or processing data: ${error.message}`);
    }
  }
  