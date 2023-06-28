import Search from "./Search"
export default function Hero() {
  return (
    <div className='flex h-[276] flex-col font-sans justify-center items-center gap-[25px] mx-[21px] xl:flex-col xl:gap-[24px] xl:self-center xl:w-[40%] xl:m-[0px] xl:h-[326px]'>
    <h2 className='flex text-center items-center font-sans flex-col font-bold text-4xl xl:text-left xl:self-start xl:w-[360px]'>Your favourite manga reader </h2>
    <p className='flex text-center text-[16px] xl:text-justify xl:w-[391px] xl:self-start' >is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
        <Search title="Search Mangas" />
        </div>
  )
}
