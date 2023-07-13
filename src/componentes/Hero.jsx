import Search from "./Search"
export default function Hero() {
  return (
    <div className='flex h-[276] mb-40 flex-col font-sans justify-center items-center gap-[25px] mx-[21px] lg:flex-col lg:gap-[24px] lg:self-center lg:h-[326px] lg:mb-[12rem] relative z-10'>
    <h2 className='flex text-center items-center font-sans flex-col text-4xl lg:text-left lg:self-start lg:w-[360px] '>Your favourite manga reader 😏 </h2>
    <p className='flex text-center text-[16px] lg:text-justify lg:w-[391px] lg:self-start' >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
        <Search title="Search Mangas" />
        </div>
  )
}
