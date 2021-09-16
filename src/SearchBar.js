import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Search for superheroes..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchBar;