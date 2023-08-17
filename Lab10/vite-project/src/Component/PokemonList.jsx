import PokemonDetail from "./PokemonDetail";

function PokemonList(props) {
  return (
    <div className="pokemon-list">
      {props.pokemonList.map((pokemon, index) => {
        return (
          <PokemonDetail key={crypto.randomUUID()} pokemonDetail={pokemon} />
        );
      })}
    </div>
  );
}

export default PokemonList;
