import React from 'react';
//import SearchResult from './SearchResult'; //may need to change

function SuperheroList(props){
    const {superheroData = []} = props;

    console.log('superheroData', superheroData);
    return(
        <div>
            {superheroData.map(superhero => 
               <SearchResult data={superhero} />
            )}
        </div>
    );
}
export default SuperheroList;

