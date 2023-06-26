import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
<div className="w-full min-h-screen bg-black p-0">
  <header className='flex justify-between items-center'>
    <img className='m-4' src="public\Menu.png" alt="" />
    <img className='m-4' src="public\Logo 2 1.png" alt="" />
  </header>
  <main className='flex sm: flex-row ' >
   <img className='opacity-30 mt-20 sm:w-68 h-80' src="public\mangas hero 1.png" alt="" />
   <div className='absolute ' >
    <div className='flex flex-col items-center mt-20 gap-3 sm:flex w-20rem h-30rem'>
    <h1 className="text-white  text-4xl font-inter font-semibold tracking-[2.4px]">
  Your favourite
   manga reader 😏
</h1>
<p className="flex flex-colum justify-center text-white text-base font-inter m-2">
  is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.
</p>
<div className=" w-64 h-8 flex items-center justify-around rounded-md border border-gray-400 bg-white bg-opacity-20 shadow-xl backdrop-blur-lg">
<img src="public\Search.svg" alt="" />
<p className='text-white mr-4'>Search mangas</p>
<p></p>
</div>
   </div>
    </div>
  
  </main>
  <footer className='bg-black'></footer>
</div>
  )
}

export default App
