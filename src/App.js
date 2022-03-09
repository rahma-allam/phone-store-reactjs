import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Default from './components/Default/Default';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<ProductList/>}/>
        <Route path="/details" element={<Details/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="*" element={<Default/>} />
       </Routes>
       <Modal/>
    </BrowserRouter>
     
    </>
  )
}
export default App