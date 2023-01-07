import React from 'react';
import "./Search.scss";

const Search = ({searchText}) => {
  return (
    <div className='app__search'>
        <input type="text" placeholder={searchText} className="inputSearch" />
    </div>
  )
}

export default Search
