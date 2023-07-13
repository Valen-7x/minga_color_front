import Search from "./Search"
export default function Manga() {
    return (
        <div className='flex bg-black pb-10 flex-col font-sans justify-center items-center gap-[25px] lg:flex-col  relative '>
            <div className="flex flex-col items-center gap-5">
            <h2 className='flex text-center text-white mb-[2rem] font-sans pr-[10rem]  text-4xl'>Search your next manga 🤤</h2>
    <Search title="Search Mangas" />
            </div>
    <div className="flex text-white w-[90vw] pl-10 gap-10 ">
        <div className="flex flex-col -left mr-10 gap-5">
    <h2>Categories</h2>
            <p>Shonen</p>
            <p>Comic</p>
            <p>Seinen</p>
            <p>Juan Carlos</p>
            <p>Kodomo</p>
        </div>
        <div className="flex flex-col gap-10 ">
        <div className="flex gap-5 pl-10">
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
        </div>
        <div className="flex gap-5 pl-10">
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
            <img className="h-[15rem]" src="public\hero.png" alt="" />
        </div>
        </div>
    
    </div>
</div>
    )
}