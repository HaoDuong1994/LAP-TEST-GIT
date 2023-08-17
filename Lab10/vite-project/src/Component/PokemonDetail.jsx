import { Link } from "react-router-dom";

function PokemonDetail(props) {
  const { name, url } = props.pokemonDetail;
  const pokemonID = url.split("/").at(-2);
  return (
    <div className="pokemon-detail">
      <h2 className="pokemon-name">{name}</h2>
      <button>
        <Link to={`/pokemon/${pokemonID}`}>View detail</Link>
      </button>
    </div>
  );
}

export default PokemonDetail;
("");
