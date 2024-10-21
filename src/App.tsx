
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './componentes/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import Sucursales from './pages/Sucursales';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25iYWxhbSIsImEiOiJjbTJpNjR5MWcwajBhMm5weHR0MG9zcnQxIn0.6juQ4ScK2x6HJTHzzAa8Pg';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/nosotros' element={<About/>}/>
        <Route path='/Sucursales' element={<Sucursales/>}/>
      </Routes>
    </>
  )
}


export default App;
