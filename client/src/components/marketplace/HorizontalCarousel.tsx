import Image from 'next/image';
import React from 'react';

interface HorizontalCarouselProps {
  items: { src: string; width: number; height: number }[];
}

const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({ items }) => {
  return (
    <div className="w-full h-full overflow-x-auto whitespace-nowrap">
      {items.map((item, index) => (
        <div key={index} className="inline-block w-1/3 p-2">
          <Image 
            src={item.src} 
            alt={`Slide ${index}`} 
            width={item.width} 
            height={item.height} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HorizontalCarousel;
