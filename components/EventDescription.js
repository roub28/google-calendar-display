// This component display the Title of the event

// Improvment : avoid having to define px-4 tailwind parameter

'use client'

import React, { useState } from 'react';

export function EventDescription({ descriptionString }) {
  const maxLength = 150;
  let descriptionBegin = descriptionString.slice(0, maxLength);

  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  const toggleSeeLess = () => {
    setSeeMore(false);
  };
  
  // Check if the last character of descriptionBegin is a space and remove it if not
  if (descriptionString[maxLength] && descriptionString[maxLength] !== ' ') {
    const lastSpaceIndex = descriptionBegin.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      descriptionBegin = descriptionBegin.slice(0, lastSpaceIndex);
    }
  }
  
  const descriptionEnd = descriptionString.slice(descriptionBegin.length);

  const combinedDescription = seeMore ? descriptionBegin + descriptionEnd : descriptionBegin;

  return (
    <div>
      <p className="text-base text-justify text-black px-4 pt-2 pb-0">
        {combinedDescription + (seeMore ? "" : "...")}
      </p>
      <button
        className="w-full text-base text-right font-bold text-blue-500 px-4 pt-0 pb-2 cursor-pointer"
        onClick={toggleSeeMore}
      >
        {seeMore ? "See Less" : "See More"}
      </button>
    </div>
  );
}