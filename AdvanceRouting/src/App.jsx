import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />}/>
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>
        </Route>
        <Route path='/contact' element={<Contact />}/>

        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
