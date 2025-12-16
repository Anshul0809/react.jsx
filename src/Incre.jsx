import React, { useState } from 'react'
import './Tailwind'

const Incre = () => {
    let [count , setcount] = useState(0)
    let Inc=()=>{
       setcount(count+1)
    }
    let Dec=()=>{
      if(count > 0){
        setcount(count-1)
      }
    }


  return (
    
    <>
    <div className='w-full h-screen bg-blue-200'>
      <h1 className='font-bold absolute left-2/5'>INCREMENT/DECREMENT</h1><br />
      <button onClick={Inc} className='w-35 border rounded-4xl bg-white italic font-semibold'>INCREMENT</button><br /> <br />
      <button onClick={Dec} className='w-35 border rounded-4xl bg-white italic font-semibold' >DECREMENT</button><br /> <br />
      
      <p className='w-35 border rounded-4xl bg-white  font-semibold'  >NUMBER={count}</p>
      </div>
    </>
  )
}

export default Incre
