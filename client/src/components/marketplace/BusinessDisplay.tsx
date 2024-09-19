import React from 'react';

const BusinessDisplay = () => {
  // Limiting to 10 items for the display
  const data = Array(10).fill("marjane");

  return (
   <section className='flex flex-col text-center'>
    <h2 className='text-2xl font-bold'>Joined Businesses</h2>
        <div className="p-4 overflow-hidden">
      <div className="flex items-center space-x-4 animate-marquee">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center h-24 w-48 bg-gray-600 text-white rounded-lg shrink-0"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="mt-2 text-lg">{item}</span>
          </div>
        ))}
        {data.map((item, index) => (
          <div 
            key={`clone-${index}`} 
            className="flex flex-col items-center justify-center h-28 w-48 bg-gray-600 text-white rounded-lg shrink-0"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="mt-2 text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
   </section> 
  );
};

export default BusinessDisplay;
