import './App.scss';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import Destination from './pages/Destination';
import About from './pages/About';
import Partner from './pages/Partner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Explore/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/guides' element={<About/>}></Route>
        <Route path='/partner' element={<Partner/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
