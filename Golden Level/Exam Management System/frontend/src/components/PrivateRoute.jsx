import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const isAuthorized = localStorage.getItem('token')
  const navigate = useNavigate();

  return isAuthorized ? (
    <Outlet />
  ) : (
    navigate("/")
  )
}

export default PrivateRoute