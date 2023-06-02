import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [pokemonList, setpokemonList] = useState([])

  useEffect(() => {

      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {setpokemonList(res.data.results)})
      .catch((err) => (err))

  },[])

  return (
    <div className="App">
      Consumindo API e mapeando os dados, trazendo o nome dos pokemons:
      <div>{pokemonList.map((pokemon) => (
            <div>{pokemon.name}</div>
        ))}</div>
      
    </div>
  );
}

export default App;
