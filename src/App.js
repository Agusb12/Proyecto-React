
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import imagen from './components/ItemListContainer/phone.jpg'
function App() {
  return (
    <div className="App">
     <NavBar title = "PHONE FIXERS" li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" />  
     <ItemListContainer title = "Primer Item Integrado" image= {imagen}/>   
    </div>
  );
}

export default App;

