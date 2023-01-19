
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
     <NavBar title = "PHONE FIXERS" li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" />  
     <ItemListContainer/>   
     
    </div>
  );
}

export default App;

