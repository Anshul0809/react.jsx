// import React, { useState } from 'react'

// const FormHandling = () => {
//     let [myname,setmyname]=useState("")
//     let [myemail,setmyemail]=useState("")
//     let [mynumber,setmynumber]=useState("")


//     let handlesubmit=(e)=>{
           
//     e.preventDefault()

//     alert(`
//         myname=${myname} and
//         myemail=${myemail} and
//         mynumber=${mynumber}
//         `)


//     }
//   return (
//     <>
//       <h1>Form Handling</h1>
         
//       <form onSubmit={handlesubmit}>

//         Enter Name: <input type="text" value={myname} onChange={(e)=>{setmyname(e.target.value)}} /><br /><br />
//         Enter Email: <input type="text" value={myemail} onChange={(e)=>{setmyemail(e.target.value)}}/><br /><br />
//         Enter Number: <input type="text" value={mynumber} onChange={(e)=>{setmynumber(e.target.value)}} /><br /><br />
        
//         <button type='submit'>handale form</button>

//         </form>  
     
    

//     </>
//   )
// }

// export default FormHandling

// component 1.control-value ke sath 
//  2.uncontrolcomponent-value nahi likhte
import React, { useState } from 'react'

const FormHandling = () => {

    // let [myname,setmyname]=useState("")
    // let [myemail,setmyemail]=useState("")
    // let [mynumber,setmynumber]=useState("")

    let [form,setform]=useState({
        myname:"",
        mynumber:"",
        myemail:""
    })
    let handlechange=(e)=>{
     setform({...form ,[e.target.name]:e.target.value})
    }

    let handleform=(e)=>{
       e.preventDefault()
       alert(`
        myname=${form.myname} 
        mynumber=${form.mynumber} 
        myemail=${form.myemail}
        `)
    }

  return (
    <>
      
      <h1>formhandling</h1>

      <form onSubmit={handleform}>

        Enter Name:<input type="text" name='myname' value={form.myname} onChange={handlechange} /> <br /> <br />
        Enter Email:<input type="text" name='myemail' value={form.myemail} onChange={handlechange}/> <br /> <br />
        Enter Number:<input type="text"name='mynumber' value={form.mynumber} onChange={handlechange}/> <br /> <br />

        <button type='submit'>handle form</button>

      </form>
    </>
  )
}

export default FormHandling

