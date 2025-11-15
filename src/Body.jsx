import React from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
      {/* if we write this outlet any children component of body component will render here */}
      <Footer></Footer>
    </div>
  )
}

export default Body;