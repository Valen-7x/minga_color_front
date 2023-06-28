import Hero from "../componentes/Hero";
import Carrousel from "../componentes/Carrousel";
export default function Index() {
  return (
    <main className='flex justify-center w-auto h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:flex-col items-start gap-[24px] md:w-[100%]'>
      <h1 className="hidden md:flex md:self-center md:text-6xl md:text-center">
        Best manga reader
      </h1>
      <Carrousel />
      <Hero />
    </main>
  );
}
