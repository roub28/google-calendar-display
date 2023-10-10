// This component display the image of the event


//A faire
// Manage the alt information

import Image from 'next/image'

export function EventImage({ imageId }) {
 
    return (
        <div className="relative rounded-lg h-40">
            <Image
            src={`https://drive.google.com/uc?export=view&id=${imageId}`}
            fill
            className="object-fill"
            style={{objectFit: "cover"}}
            alt="Image of the event"
            />
        </div>
      )
}