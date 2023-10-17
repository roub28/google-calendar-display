// These styles apply to every route in the application
import './globals.css'
 
export const metadata = {
  title: 'My Third Place Events',
  description: 'This is a small example project to show how to fetch events from Google Calendar and display them in a clear and elegant manner.',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
