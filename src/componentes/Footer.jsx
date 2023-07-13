export default function Footer() {
  return (
    <footer className=" h-[30vh] w-screen flex flex-col items-center bg-black sm:h-[35vh]">
    <div className="w-screen sm-[25vh]">
      <img className="h-24 w-full rounded-b-full" src="/cswc5oyv 1.png" alt=""/>
    </div>
    <div className="h-[30vh] sm-[]  flex flex-col items-center justify-around w-screen mt-2">
    <div className="flex justify-center gap-8">
        <p className="text-white">Home</p>
        <p className="text-white">Mangas</p>
      </div>
      <img className="w-[3.5rem]" src="/public/Logo 2 1.png" alt="logo"/>
     <div className="flex justify-center gap-5 w-[50%]">
      <div className="w-[50%] bg-white h-6 rounded-[4px]">
       <p className="">Donate</p>
       <img src="" alt="" />
      </div>
     </div>
    </div>
    <div className="h-px bg-white"></div>
  </footer>
  );
}
