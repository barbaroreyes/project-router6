
import './App.css';
import Header from './compo/Header';
import Footer from './compo/Footer';
import ProductDetails from './compo/ProductDetails';
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes , Route} from 'react-router-dom'
const words = ['papa1','papa2','papa3','papa4']
function App() {
  return (
    <div className="App">
       <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products words={words}/>}/>
            <Route path='/param/:id' element={<ProductDetails words={words}/>}/>
          </Routes>
        
       <Footer/>
    </div>
  );
}

export default App;
