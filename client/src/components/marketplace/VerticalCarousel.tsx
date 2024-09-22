import Image from 'next/image';
import React from 'react';

interface VerticalCarouselProps {
  items: { src: string; width: number; height: number }[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  return (
    <div className="w-full h-full overflow-y-auto">
      {items.map((item, index) => (
        <div key={index} className="p-2">
          <Image 
            src={item.src} 
            alt={`Slide ${index}`} 
            width={item.width} 
            height={item.height} 
            className="w-full h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default VerticalCarousel;
