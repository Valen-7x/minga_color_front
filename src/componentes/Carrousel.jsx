import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    'mangas-hero.png',
    'mangas-hero-2.png',
    'mangas-hero-3.png',
    // Agrega aquí más nombres de imágenes si es necesario
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className='flex flex-wrap flex-row self-center justify-evenly w-[50%] xl:flex-wrap'>
      <img className='hidden flex-wrap xl:flex xl:items-center xl:w-[440px] xl:h-[550px]'
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
      />
    </div>
  );
}