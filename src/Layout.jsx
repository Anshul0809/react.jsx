import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <header>
        <h1>logo</h1>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

        </ul>
      </header>
      {/* Component will render here  */}

      <Outlet/>

      <footer>
        <h1>This is footer</h1>
      </footer>
    </>
  )
}

export default Layout
