'use client'
import { SetStateAction, useEffect, useState } from 'react';
import Information from "./information";


function Card() {
  const [pokemon, setPokemon] = useState<string>('');
  const [informacion, setInformacion] = useState<{[key: string]: any}>({});
  const [ilustracion, setIlustracion] = useState<{[key: string]: any}>({});
  const [tipos, setTipos] = useState<{[key: string]: any}>({});
  const [mostrar, setMostrar] = useState(false);
  const [nombre,setNombre]=useState<string>('')
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value);
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const traer = async()=>{
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setInformacion(data)
        setIlustracion(data.sprites)
        const a = data.types.map((obj)=>obj.type.name)
        setTipos(a)
        setNombre(data.name.toUpperCase())
      } catch (error) {
        alert('Error al obtener datos:', error)
        console.error('Error al obtener datos:', error);
      }
    }
    traer()
    setMostrar(true)
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
          <Information name={nombre} imagen1={ilustracion.front_default} imagen2={ilustracion.back_default} id={informacion.id} tipos={tipos}></Information>
        </div>
      }
    </div>
  );
}
export default Card;