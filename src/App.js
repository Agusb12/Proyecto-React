
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainPart from './components/MainPart/MainPart';
function App() {
  return (
    <div className="App">
     
     <NavBar title = "PHONE FIXERS" li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" /> 
     <MainPart/>
    </div>
  );
}

export default App;

