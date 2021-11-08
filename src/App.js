
import './App.css';
import Header from './compo/Header';
import Footer from './compo/Footer';
import Param from './compo/Param';
import Home from './pages/Home'
import All from './pages/All'
import { Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/all' element={<All/>}/>
            <Route path='/param/:id' element={<Param/>}/>
          </Routes>
        
       <Footer/>
    </div>
  );
}

export default App;
