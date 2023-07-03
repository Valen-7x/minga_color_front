import { useState, useEffect } from 'react';
//useState y useEffect de React. Estas funciones son hooks que
// permiten manejar el estado y los efectos secundarios en componentes funcionales de React.
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
    <div className='flex flex-wrap flex-row self-center justify-evenly w-[50%] lg:flex-wrap before:bg-black/50'>
      <img className='hidden flex-wrap lg:flex lg:items-center lg:w-[440px] lg:h-[550px]'
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
      />
    </div>
  );
}

//repasar use effects y use state