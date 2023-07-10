export default function Search ({ title }) {
  return (
    <div>
    <label htmlFor="search" className="px-[0.5rem] flex items-center rounded-md border border-gray-400 bg-[#1d1d1de4]" >
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 37 37" fill="none" className="w-[1.8rem]">
<circle cx="16.9582" cy="16.9582" r="10.7917" stroke="white" stroke-width="2"/>
<path d="M30.8335 30.8335L26.2085 26.2085" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
      <input id="search" className=" w-[250px] rounded-md h-10 text-center gap-16  bg-[#1d1d1de4] sm: w-100% lg:text-center lg:self-start lg:w-[390px]" type="text" placeholder="Search mangas" />
      </label>
    </div>
  )
}