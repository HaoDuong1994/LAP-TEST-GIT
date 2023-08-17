import PokemonSearch from "../Component/PokemonSearch";
import PokemonList from "../Component/PokemonList";
import { useEffect } from "react";
import { useState } from "react";
import PokemonFilter from "../Component/PokemonFilter";
function PokemonPage() {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const getPokemonList = async () => {
    const pokemonURL = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(pokemonURL);
    const dataJson = await response.json();
    setPokemonList(dataJson.results);
  };
  useEffect(() => {
    getPokemonList();
  }, []);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  console.log(search);
  const filterPokemon = pokemonList.filter((newPokemon) => {
    return newPokemon.name === search;
  });
  console.log(filterPokemon);
  return (
    <div>
      <PokemonSearch handleSearch={handleSearch} />
      <PokemonList pokemonList={pokemonList} />
      <PokemonFilter newPokemon={filterPokemon} />
    </div>
  );
}

export default PokemonPage;
