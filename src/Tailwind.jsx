import React from 'react'
import './Tailwind.css'

const Tailwind = () => {
  return (
    <>
       {/* <h1 className='text-red-500'>Anshul </h1> */}
       {/* <h1 className='bg-red-800 w-full' id='okk'>Anshul </h1> */}

       {/* <div className='w-full h-screen border-amber-700 bg-[url("vite.svg")] bg-cover bg-center flex justify-center items-center font-bold
'>
        
       <h1 >React Tailwind</h1>


       </div>

       <button>click me </button> */}

       {/* sm=>0-450px-768px
       mg=>758-1024px
       lg=>1024-1188px */}


    <header className='w-full h-20 border flex justify-evenly items-center'>
        <h1>logo</h1>
         {/* <ul className='flex gap-4'> */}
         <ul className='hidden sm:flex gap-4'>

          <li>home</li>
          <li>about</li>
          <li>service</li>


         </ul>
         <button className='border p-4 rounded-2xl'>download</button>
    </header>
    </>
  )
}

export default Tailwind
