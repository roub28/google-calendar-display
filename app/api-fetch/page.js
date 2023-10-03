async function getData() {
 
  const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GCAL_ID}/events?key=${process.env.GCAL_API_KEY}`
  const res = await fetch(apiUrl, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()

  const summaryElements = data.items.map((item) => (
    <div key={item.id}>
      Summary: {item.summary}
    </div>
  ));

  return (
    <div>
      {summaryElements}
    </div>
  );
}