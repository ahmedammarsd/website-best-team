import { Navigate , Outlet } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { useEffect, useState } from "react";

export default function ProtectedRoute() {
   // const userStates = useSelector((state) => state.user)
 //   const accessToken = userStates.datalogin?.token;
    const userData = ( JSON.parse(localStorage.getItem("user")))
   // const [checkToken , setCheckToken] = useState(true);

  return (
     userData  
    ? <Outlet /> 
    : <Navigate to='/log-in'/>
  )
}
