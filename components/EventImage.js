// This component display the image of the event


//A faire
// Manage the alt information
// Optimize Image Size


import Image from 'next/image'

export function EventImage({ imageId }) {
 
    return (
        <div className="relative rounded-lg h-40">
            <Image className="rounded-t-lg"
            src={`https://drive.google.com/uc?export=view&id=${imageId}`}
            fill
            style={{objectFit: "cover"}}
            // width={300}
            // height={200}
            alt="Image of the event"
            />
        </div>
      )
}