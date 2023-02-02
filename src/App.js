
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Detail from './components/pages/Details';
function App() {
  // const [pokemon,setPokemon] = useState([])
  // useEffect( ()=>{
  //  fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  //  .then((response)=>{
  //   return response.json()
  //  })
  //  .then((data)=>{
  //   console.log("data",data)
  //   setPokemon(data.results)
  //  })
  // },[])
    return (
  <BrowserRouter> 
      <div className="App">
        <NavBar li1 = "Inicio" li2 = "Formulario" li3 = "Contacto" />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/> 
        <Route path='productos' element = {<ItemDetailContainer/>}/> 
        <Route path="/:producto/:id" element = {<Detail/>}/>      
      </Routes>    
            {/* <div>
              <h2>Pokemones</h2>
                {pokemon.map( (poke,i)=>{
                 return <p key = {i}>{poke.name}</p> 
                })}
          </div> */}
    </div>
  </BrowserRouter>    
  );
}
export default App;

