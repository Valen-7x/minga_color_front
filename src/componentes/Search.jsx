export default function Search ({ title }) {
  return (
    <div className=" w-[300px] h-10 flex items-center gap-16 rounded-md border border-gray-400 bg-white bg-opacity-20 shadow-lg backdrop-blur-lg sm: w-100% lg:text-left lg:self-start lg:w-[390px]">
    <img className="ml-2" src="public\Search.svg" alt="" />
    <p className="text-white mr-4 lg:ml-8">Search mangas</p>
  </div>
  )
}
