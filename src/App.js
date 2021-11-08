import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './compo/Header';
import Footer from './compo/Footer';
import ProductDetails from './compo/ProductDetails';
import Home from './pages/Home'
import Products from './pages/Products';
import Cart from './pages/Cart'
import { Routes , Route} from 'react-router-dom'
const words = ['papa1','papa2','papa3','papa4']
function App() {
const [cart,setCart] = useState()
  const addTocart =(product) => {
  setCart(product)
  }
  return (
    <div className="App">
       <Header/>
         <Routes>
            <Route path='/' 
            element={<Home/>}
            />
            <Route path='/products' 
            element={<Products
             words={words}/>}
             />
            <Route path='/cart'
             element={<Cart cart={cart} 
             words={words}
             />}
             />
            <Route path='/param/:id'
             element={
            <ProductDetails 
            words={words}
            addTocart={addTocart}
            />}
            />
          </Routes>
        
       <Footer/>
    </div>
  );
}

export default App;
