import Carrousel from "../componentes/Carrousel";
import Hero from "../componentes/Hero";

export default function Index() {
  return (
    <main className='flex flex-wrap justify-center w-auto min-h-screen text-white bg-black bg-[url("./public/mangas-hero.png")] xl:bg-[url(hidden)] bg-contain bg-center bg-no-repeat md:inline-flex items-start gap-[24px] md:w-[100%]'>
      <h1 className="hidden md:w-[100%] md:flex md:self-center md:text-6xl md:text-center md:justify-center">
        Best manga reader
      </h1>
      <Carrousel/>
      <Hero />
    </main>
  );
}
