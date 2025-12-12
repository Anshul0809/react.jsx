import React from 'react'
import './Tailwind'

const Heropage = () => {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover bg-[url("banterbg.jpg")]'>
      {/* navbar  */}
        <header>
         <nav className='w-full h-16  flex justify-evenly items-center text-white '>
          <li className='absolute left-4 font-extrabold list-none scale-150'>$ Banter</li>
          <ul className='hidden sm:flex gap-6 list-none'>
            
            <li>Home</li>
            <li>Features</li>
            <li>Defi App</li>
            <li>Assets</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Protection</li>
            

            
          </ul>
          <div className='flex gap-3'>
          <button className='border w-20 h-8 rounded-2xl bg-white text-black font-medium absolute right-50 top-5 hover:scale-110'>Sign in</button>
          <button className='border w-20 h-8 rounded-2xl  text-white font-medium absolute right-25 top-5 hover:scale-110'>Log in</button>
          </div>
         </nav>

        </header>
        {/* first page */}
        <div className='text-black border w-75 flex justify-center absolute left-2/5 top-2/6 bg-blue-300 rounded-2xl scale-150 hover:scale-200'>
          <p className=''>~Revolutionizing Crypto Finance</p>
        </div>
        <div className='text-white  text-xl font-semibold scale-130 absolute left-1/4 top-2/4'>
          <p>Innovative Crypto Financial Solution For Any Ivestment Challenge</p>
          <p>We Dont Just Focus On Investment. We Cover Your Entire Financial Ecosystem.From Budgeting To Retirement</p>

        </div>
        {/* join button  */}
        <button className='text-white absolute left-1/2 top-2/3 border w-20 bg-blue-500 rounded-2xl scale-150 hover:scale-200'>Join Me</button>
    </div>
  )
}


export default Heropage
