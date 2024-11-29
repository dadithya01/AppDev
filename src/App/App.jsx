import './App.css'
import Offcanva from '../Components/Navbars/Main-navbar'
import Home from '../Pages/Home/Home'
import Aboutus from '../Pages/About Us/About Us'
import Contactus from '../Pages/Contact Us/Contact Us'
import Freetutorials from '../Pages/Free Tutorials/Free Tutorials'
import References from '../Pages/References/References'
import Howto from '../Pages/How To\'s/How To\'s'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <Offcanva/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Freetutorials' element={<Freetutorials/>}/>
        <Route path='/References' element={<References/>}/>
        <Route path='/Howto' element={<Howto/>}/>
      </Routes>
    </>
  )
}

export default App