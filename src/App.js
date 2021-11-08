
import './App.css';
import Header from './compo/Header';
import Footer from './compo/Footer';
import SingleProduct from './compo/Param';
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/all' element={<Products/>}/>
            <Route path='/param/:id' element={<SingleProduct/>}/>
          </Routes>
        
       <Footer/>
    </div>
  );
}

export default App;
