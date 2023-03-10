import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Detail from './components/pages/Details';
import Cart from './components/pages/cart';
import CartProvider from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {

    return (
      <div className="App">
      <CartProvider> 
        <BrowserRouter> 
        <NavBar li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/> 
        <Route path="/:producto/:id" element = {<Detail/>}/>   
        <Route path="/cart" element = {<Cart/>}/>   
      </Routes>    
     </BrowserRouter>
    </CartProvider>   
    </div>
    )}
export default App;

