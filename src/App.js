
import './App.css';
import Header from './compo/Header';
import Footer from './compo/Footer';
import Main from './compo/Main';
import Home from './pages/Home'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
       <Footer/>
    </div>
  );
}

export default App;
