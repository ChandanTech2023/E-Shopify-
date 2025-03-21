import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import ProductCard from './components/ProductCard'
function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path="/" element={<ProductCard product={{
          id: 1,
          name: "Sample Product",
          price: 99,
          image: ""
        }} />} />


      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
