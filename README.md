This is a small example project to show how to fetch events from Google Calendar and display them in a clear and elegant manner.

Here is a [demo](https://google-calendar-display.vercel.app/) linked to [this public Google Calendar](https://calendar.google.com/calendar/embed?src=e3bcc5988cce9e0d1fcdede37df7bab2c180010135e7b4bf0185b3870cd520dd%40group.calendar.google.com&ctz=Europe%2FParis)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This can be usefull, for example, for third places to display their events on their websites

## Getting Started

Create a Google Calendar
Make it available to public
Get the Calendar Id and copy it in the file .env.local : GCAL_ID = yourGCalendarId
Activate Google Calendar API and Google Drive API (to get event pictures)
Create a google API key restricted to Google Calendar and Google Drive and copy it in the file .env.local : GCAL_API_KEY = yourGCalendarId

## Add an Event

Every event added to the calendar will be automaticly display to the web app (instantly in dev mode and in less than an hour in production mode)
If you attach an image to the GCal event it will be used as a cover. NB : The image must be public.
A description exceding 150 characters will be sliced and available completly thanks to a see more button.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

https://calendar.google.com/calendar/embed?src=e3bcc5988cce9e0d1fcdede37df7bab2c180010135e7b4bf0185b3870cd520dd%40group.calendar.google.com&ctz=Europe%2FParis
