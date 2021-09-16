import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

//sets states
function App() {
  const [searchText, setSearchText] = useState('');  //declare new state variable called "search"
  const [superheroData, setSuperheroData] = useState([]);


  //calls API
  async function searchSuperHeroes () {
    const response = await fetch(`https://superheroapi.com/api.php/153665986925827/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data)

    setSuperheroData(data.results);
  }


  //when user inputs name into keyboard
  function handleChange (e) {
    const searchTerm = e.target.value; //user input value set to 'searchTerm'
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  );
}

export default App;