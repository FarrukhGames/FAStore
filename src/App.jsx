import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import Cart from './components/Cart';
// import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Navigation/> 
        {/* <Menu/> */}
        <Cart/>
      </main>
    </>
  );
}

export default App;
