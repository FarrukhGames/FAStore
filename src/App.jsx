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
import {useState, useEffect} from "react";
import Modal from "./components/Modal";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoggedInfo = localStorage.getItem("logged");
  useEffect(() => {
    console.log("effect");
    if (isLoggedInfo === "1") {
      setIsLogged(true);
    }
  }, []);
  const loginHandler = (event) => {
    event.preventDefault();
    setIsLogged(true);
    localStorage.setItem("logged", "1");
  }
  const logoutHandler = () => {
    setIsLogged(false);
    // localStorage.setItem("logged", "0");
    localStorage.removeItem("logged");
  }
  const showModal = () => {
    setIsModalShown(true);
  }
  const hideModal = () => {
    setIsModalShown(false);
  }
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation isAuthenticated={isLogged} logoutFunction={logoutHandler} showModalFunction={showModal}/> 
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
        {/* {isModalShown && <Modal hideModalFunction={hideModal} showModalFunction={showModal} isShown={isModalShown}><Auth loginFunction={loginHandler}/></Modal>} */}
        {<Modal hideModalFunction={hideModal} showModalFunction={showModal} isShown={isModalShown}><Auth loginFunction={loginHandler}/></Modal>}
      </main>
    </>
  );
}

export default App;
