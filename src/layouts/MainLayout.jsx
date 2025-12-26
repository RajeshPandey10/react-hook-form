import React from 'react'
import NavBar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({user}) => {
  return (
   <>
   <NavBar user={user}/>
   <div className='mt-2 mx-12'>
    <Outlet/>
   </div>
   
   </>
  )
}

export default MainLayout