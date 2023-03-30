import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Telephone from './components/Telephone';
import Computer from './components/Computer';
import Monitor from './components/Monitor';
import AirPods from './components/AirPods';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/> 
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/telephone" element={<Telephone/>}/>
          <Route path="/computer" element={<Computer/>}/>
          <Route path="/monitor" element={<Monitor/>}/>
          <Route path="/airpods" element={<AirPods/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
