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
import { useDispatch, useSelector } from 'react-redux';
import { getMainParagraph } from './features/MainPragraph';
import DetailNews from './pages/DetailNews';
import News from './pages/News';


function App() {


  const dispatch = useDispatch(); 
  const mainPara = useSelector((state) => state.mainPara);
  useEffect( () => {
    Aos.init();
    // axios.get(`${BaseUrl}main_paragraphs`) 
    // .then((data) => console.log(data))
    // .catch((er) => console.log(er));

    // async function testFetch () {
    //   console.log("start test fetch")
    //   try {
    //     const response = await fetch(`${BaseUrl}news`)
    //     const data = await response.json();
    //     console.log (data)
    //   }
    //   catch (err) {
    //     console.log(err)
    //   }
    //   finally{
    //     console.log("end test fetch")
    //   }
    // }
    
    // testFetch()
    const getLen = mainPara.data
    if (getLen?.length === 0){
     dispatch(getMainParagraph());
    }
  }, [])

  return (
   <div>
     <Routes>
          <Route path='/' element={<Main />}  />
          <Route path='/news' element={<News />} />
          <Route path='/news/detail-news/:id' element={<DetailNews />} />
         <Route path='/log-in' element={<Login />}  />
          <Route element={<ProtectedRoute />}>
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
