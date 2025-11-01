import {Route,Routes,Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
export default () => {
 return(
    <>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}></Route>
 </Routes> 
   </>
)
};
