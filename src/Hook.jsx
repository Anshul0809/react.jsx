// import React, { useState } from 'react'

// const Hook = () => {

// // let [variable,function]=useState(initial value)

// let [count,setcount]=useState(0)

//     // let count=0

//     let Inc=()=>{
//        setcount(count+1)
//     }
// let Dec=()=>{
//     setcount(count-1)
// }
//   return (
//     <>
//       <h1>Use State</h1>


//        <button onClick={Inc}>Increment</button>
//        <button onClick={Dec}>Decrement</button>
//        Count:{count}
//     </>
//   )
// }

// export default Hook

// import React, { useState } from 'react'

// const Hook = () => {

//     let [count , setcount]=useState(0)
//     let Inc=()=>{
//       setcount(count+1)
//     }

//   return (
//     <>
//     <h1>Use State</h1>

//       <button onClick={Inc}>Increment</button>
//       count:{count}
//     </>
//   )
// }

// export default Hook

import React, { useState } from 'react'

const Hook = () => {
    let [myname , setmyname] =useState ("")

    let changeinp=(e)=>{
        
    // console.log(e)
    // console.log(e.target)
    console.log(e.target.value)
    setmyname(e.target.value)

    }

  return (
    <>
      <input type="text" onChange={changeinp}/>
      Name:{myname}
    </>
  )
}

export default Hook

