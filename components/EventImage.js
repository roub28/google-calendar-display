// This component display the image of the event

import Image from 'next/image'

export function EventImage({ imageId }) {
    let src=`https://www.googleapis.com/drive/v3/files/${imageId}?alt=media&key=${process.env.GCAL_API_KEY}`
    
    if (imageId === "default") {
        src = "logo.svg"
      }

    return (
        <div className="relative rounded-lg h-40">
            <Image className="rounded-t-lg"
            src={src}
            fill
            style={{objectFit: "cover"}}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Image of the event"
            />
        </div>
      )
}