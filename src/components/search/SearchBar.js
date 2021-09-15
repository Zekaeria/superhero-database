import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;
    //inside searchbar
    return (
        <div>
            <input
                id = "search-bar"
                type = "search"
                placeholder = "Please type here..."
                onChange = {handleChange}
                value = {searchText}
            />
        </div>
    );
}

export default SearchBar;