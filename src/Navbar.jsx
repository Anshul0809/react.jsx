import React from 'react'
// import './App.css'

const Navbar = () => {
  return (
    <>
      <header>
        <h1 style={{color:"red",backgroundColor:"green"}}>logo</h1>
        <ul>
            <li className='red'>HOme</li>
            <li id='blue'>About</li>
            <li>Service</li>

        </ul>
      </header>
    </>
  )
}

export default Navbar
