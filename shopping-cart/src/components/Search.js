import React, { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { SEARCH_PRODUCTS } from '../actions/types'

function Search() {
    const [searchTerm,setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSearchDebounced = useMemo(() => debounce(function () {
        console.log("handleSearchDebounced");
        dispatch({type:SEARCH_PRODUCTS,payload:searchTerm})
      }, 500),[searchTerm]);

    const printSearch = (event) => { 

        setSearchTerm(event.target.value);
        handleSearchDebounced();
    }
    return (
        <input className="search" type="search" value={searchTerm} placeholder="Search" onChange={printSearch}></input>
    );
}

export default Search;