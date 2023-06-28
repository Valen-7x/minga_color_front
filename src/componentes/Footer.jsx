export default function Footer() {
  return (
    <footer className="h-auto flex flex-col bg-black sm: h-96">
    <div className="">
      <img className="h-24 w-full rounded-b-full" src="/cswc5oyv 1.png" alt="" />
    </div>
    <div className="h-24 flex justify-around bg-black mt-2 ">
    <div className="flex justify-around gap-5">
        <p className="text-white">Home</p>
        <p className="text-white">Mangas</p>
      </div>
      <img className="h-8" src="public\Logo 2 1.png" alt="" />
     <div className="flex flex-col gap-5">
      <div className="flex justify-around gap-2">
    <img className="h-4" src="public\facebook-black.svg" alt="" />
    <img className="h-4" src="public\twitter-black.svg" alt="" />
    <img className="h-4" src="public\vimeo-black.svg" alt="" />
    <img className="h-4" src="public\youtube-black.svg" alt="" />
      </div>
      <div className="flex bg-white h-6 rounded-[4px]">
       <p className="">Donate</p>
       <img src="" alt="" />
      </div>
     </div>
    </div>
    <div className="h-px bg-white"></div>
  </footer>
  );
}
