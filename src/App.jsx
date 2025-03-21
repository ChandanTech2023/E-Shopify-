import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Shop />}></Route>
      </Routes>
      
      <Footer/>

    </BrowserRouter>
  )
}

export default App
