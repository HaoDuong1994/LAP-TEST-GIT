import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function PokemonDetailPage() {
  const [pokemonDetailData, setPokemonDetailData] = useState(null);
  const { pokemonID } = useParams();
  const getPokemonDetail = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`
    );
    const dataJson = await response.json();
    setPokemonDetailData(dataJson);
  };
  useEffect(() => {
    getPokemonDetail();
  }, [pokemonID]);
  if (pokemonDetailData === null) {
    return <div>Loading</div>;
  }
  console.log(pokemonDetailData);
  return (
    <div className="pokemon-container">
      <h2 className="heading-pokemon-name">{pokemonDetailData.name}</h2>

      <div>
        <img
          className="pokemon-img"
          src={pokemonDetailData.sprites.front_default}></img>
        <img
          className="pokemon-img"
          src={pokemonDetailData.sprites.back_shiny}></img>
        <img
          className="pokemon-img"
          src={pokemonDetailData.sprites.back_default}></img>
        <img
          className="pokemon-img"
          src={pokemonDetailData.sprites.front_shiny}></img>
      </div>
      <div>
        Weight of {pokemonDetailData.name} {pokemonDetailData.weight}
      </div>
      <button
        style={{
          color: "red",
        }}>
        <Link to="/">Back To Pokemon List</Link>
      </button>
    </div>
  );
}

export default PokemonDetailPage;
