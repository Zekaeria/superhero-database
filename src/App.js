/* App Movement */
/* features: moving background, jsx */


import React, { useState } from 'react';
import NavBar from './components/layout/NavBar';
import SearchBar from './components/search/SearchBar';
import SearchResults from './components/superheroes/SuperheroList';

function App() {
  const [searchText, setSearchText] = useState(''); //func that creates specific state (imported from react)
  const [superheroData, setSuperheroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://superheroapi.com/api/153665986925827/search/${searchText}`); //try w text
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }

  function handleChange (e) {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) { 
      setSuperheroData([]); }
    if (searchTerm.length > 3) { searchSuperHeroes(); }  
  }

  return (
    <div className = "App">
      <NavBar />
      <div className = "main">
        <SearchBar searchText = {searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;
