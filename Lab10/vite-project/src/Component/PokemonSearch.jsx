import { useState } from "react";

function PokemonSearch(props) {
  return (
    <div>
      <input
        onChange={props.handleSearch}
        type="text"
        placeholder="Tìm kiếm pokemon"
      />
    </div>
  );
}

export default PokemonSearch;
