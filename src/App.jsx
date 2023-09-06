import React , { useEffect } from 'react';
import { Routes , Route } from "react-router-dom";
import Aos from 'aos';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  useEffect( () => {
    Aos.init();
  }, [])

  return (
   <div>
     <Routes>
       <Route path='/' element={<Login />}  />
       <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Main />}  />
       </Route>
       
     </Routes>
   </div>
  )
}

export default App
