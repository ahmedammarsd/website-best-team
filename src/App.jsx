import { useEffect } from 'react';
import { Routes , Route } from "react-router-dom";
import Aos from 'aos';
import Login from './pages/Login';
import Main from './pages/Main';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from './pages/Dashboard';
import { dashboardLinks } from "./data/data"
import MainBoard from "./pages/Dashboard-pages/MainBoard"
import MainParagraph from './pages/Dashboard-pages/MainParagraph';
import NewsAndArticles from './pages/Dashboard-pages/NewsAndArticles';
import Users from './pages/Dashboard-pages/Users';

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
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<MainBoard />} />
            <Route path={dashboardLinks[0].to} element={<MainBoard />} />
            <Route path={dashboardLinks[1].to} element={<MainParagraph />} />
            <Route path={dashboardLinks[2].to} element={<NewsAndArticles />} />
            <Route path={dashboardLinks[3].to} element={<Users />} />
          </Route>
       </Route>
       
     </Routes>
   </div>
  )
}

export default App
