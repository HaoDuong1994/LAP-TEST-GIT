function PokemonFilter(props) {
  console.log(props);
  const { newPokemon } = props;
  console.log(newPokemon);
  return (
    <div>
      {newPokemon.map((pokemon) => {
        return (
          <div>
            <h2>{pokemon.name}</h2>
            <button>View detail</button>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonFilter;
