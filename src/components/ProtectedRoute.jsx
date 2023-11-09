import { Navigate , Outlet } from "react-router-dom";
import { useAuth } from '../context/auth';

export default function ProtectedRoute() {
    const {success} = useAuth();
    
  return (
    success === true 
    ? <Outlet /> 
    : <Navigate to='/'/>
  )
}
