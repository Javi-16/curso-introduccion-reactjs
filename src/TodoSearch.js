import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const onSearchValue = (event) => {
        console.log(event.target.value);
    }

    return(
        <input 
        className="TodoSearch"
        placeholder="Cebolla" 
        onChange={onSearchValue}
        />
    );
}

export { TodoSearch };
