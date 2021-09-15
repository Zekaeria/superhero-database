
import React from 'react';
//import SuperheroList from './SuperheroList';


//prints out short/PREVIEW info from search for superhero

function SearchResult(props){
    const {data} = props;

    console.log('data', data);
    return (
        <div className = "search-result">
            <div className = "left">
                <img src={data.image.url} alt="super pic" />
            </div>
            <div className = "right">
                <h1>{data.name}</h1>
                <span style = {{color:'gray', marginBottom: 5}}>{data.biography['full-name']}</span>
                <div className = "stats" >
                    <div>Strength: {data.powerstats.strength}</div> 
                    <div>Speed: {data.powerstats.speed}</div> 
                    <div>Power: {data.powerstats.power}</div> 
                </div>
            </div>      
        </div>
    );
}

export default SearchResult;