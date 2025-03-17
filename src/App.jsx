import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Carddetails from './components/Carddetails'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/cart' element={<Home />}>
        
        </Route>
      </Routes>
      
      <Footer/>

    </BrowserRouter>
  )
}

export default App
