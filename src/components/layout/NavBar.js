//Know: components contain NavBar, searchbar,
//      searchresultitem
//      search results
//      APP.js puts components together (main)

import React from 'react';

function Navbar(props){
    return (
        <div className = "navbar"> 
            <span id = "logo"> Superhero Database </span>
        </div>
    );
}

export default Navbar; //imports func from another script file