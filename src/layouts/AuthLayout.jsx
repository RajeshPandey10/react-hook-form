import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = ({user}) => {
  return (
   <>
   {user?<Outlet/>:<Navigate to = "/login"/>}
   </>
  )
}

export default AuthLayout