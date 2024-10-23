import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
    const isProtected = true;
  return (
    <div>
       {isProtected ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default ProtectedRoute