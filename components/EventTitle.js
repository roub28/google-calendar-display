// This component display the Title of the event

export function EventTitle({ titleString }) {
  return (
    <h2 className="text-2xl font-bold text-gray-800 px-4 pt-4">
      {titleString}
    </h2>
  )
}