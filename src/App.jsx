import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
// import Telephone from './components/Telephone';
// import Computer from './components/Computer';
// import Monitor from './components/Monitor';
// import AirPods from './components/AirPods';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
// import Page from './components/Page';
import SingleGood from './components/SingleGood';
import Deferred from './components/Deferred';
import Auth from './components/Auth';
import {Route, Routes} from 'react-router-dom';
import {useState} from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLogged(true);
  }
  const logoutHandler = () => {
    setIsLogged(false)
  }
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation isAuthenticated={isLogged} logoutFunction={logoutHandler}/> 
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          {/* <Route path="/telephone" element={<Telephone/>}/> */}
          {/* <Route path="/computer" element={<Computer/>}/> */}
          {/* <Route path="/monitor" element={<Monitor/>}/> */}
          {/* <Route path="/airpods" element={<AirPods/>}/> */}
          <Route path="/:product" element={<SingleGood/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
          {/* <Route path="/:page" element={<Page/>}/> */}
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/deferred" element={<Deferred/>}/>
        </Routes>
        {!isLogged && <Auth loginFunction={loginHandler}/>}
      </main>
    </>
  );
}

export default App;
