import React from 'react'

const Child = (props) => {
  return (
    <>
    <h1>Child</h1>
    {/* <div style={{width:"500px",height:"800px",border:"1px solid black",display:"flex"}}>
        <img src={props.myimg} alt="" />
        <p>{props.myprice} </p>
        <p>{props.mydes}</p>
    </div> */}

    <div style={{width:"500px",height:"300px",border:"1px solid black",display:"flex",alignItems:"center"}}>
      <img src={props.mydata} alt="" />
    </div>
      
    </>
  )
}

export default Child
