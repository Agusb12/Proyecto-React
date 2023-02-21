
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Detail from './components/pages/Details';
import CartProvider from './context/CartContext';
function App() {

    return (
  <CartProvider> 
    <BrowserRouter> 
      <div className="App">
        <NavBar li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/> 
        <Route path="/:producto/:id" element = {<Detail/>}/>   
        <Route path="/cart" element = {<cart/>}/>   
      </Routes>    
        
    </div>
    </BrowserRouter>
  </CartProvider>     
  );
}
export default App;

