'use client'
import { SetStateAction, useEffect, useState } from 'react';
import fetchData from "./fetchData";
import Information from "./information";


function Card() {
  const [pokemon, setPokemon] = useState<string>('');
  const [informacion, setInformacion] = useState<{[key: string]: any}>({});
  const [mostrar, setMostrar] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiData = fetchData("https://pokeapi.co/api/v2/pokemon/"+pokemon);
    console.log(apiData);
    setInformacion(apiData);
    setMostrar(!mostrar)
  };
  return (
    <div className="pokedex content-center bg-red-600 p-2 rounded">
      <h1>Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pokemon" className="p-2 text-black" value={pokemon} onChange={handleChange}/>
        <button className="m-2 bg-gray-100 text-black p-2" type="submit">Buscar</button>
      </form>
      {mostrar &&
        <div className="card">
        
        <Information props={informacion}></Information>
    </div>
      }
    </div>
  );
}
export default Card;