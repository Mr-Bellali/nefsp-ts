import { useEffect, useState } from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
import Image from 'next/image';
import first from '@/assets/slide1.png';
import second from '@/assets/slide2.jpg';
import third from '@/assets/slide3.jpg';

const images = [
  { src: first, alt: 'First' },
  { src: second, alt: 'Second' },
  { src: third, alt: 'Third' },
];

const HorizontalCarousel = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Only run on the client side
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    // Render nothing on the server
    return null;
  }

  return (
    <TECarousel ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {images.map((image, index) => (
          <TECarouselItem
            key={index}
            itemID={index + 1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              src={image.src}
              className="block w-full h-full"
              alt={image.alt}
              layout="responsive"
              width={1920} 
              height={2080}
            />
          </TECarouselItem>
        ))}
      </div>
    </TECarousel>
  );
};

export default HorizontalCarousel;
