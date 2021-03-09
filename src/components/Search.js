import React, { useState, useEffect } from 'react';
import SvgMovie from '../iconComponents/MovieIcon';
import SvgSearch from '../iconComponents/SearchIcon';
import SearchResults from './SearchResults.js';
import './Search.scss';

const Search = () => {
  const [state, setState] = useState({
    searchQuery: "",
    searchResults: [],
    selectedResult: {}
  });
  const apiKey = process.env.REACT_APP_API;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${state.searchQuery}`; 

  const handleInput = e => {
    let searchQuery = e.target.value;
    
    setState(prevState => {
      return { ...prevState, searchQuery: searchQuery };
    });
  }

  useEffect(() => {
    if (state.searchQuery.length >= 3) {
      fetch(apiUrl)
      .then(data => data.json())
      .then(data => {
        setState(prevState => {
        return {...prevState, searchResults: [...data.results]}
        });
      });
    } else {
      setState(prevState => {
        return {...prevState, searchResults: []}
      });
    }
  }, [state.searchQuery])

  const renderResults = results => {
    return (
      results.length > 0 && (
        <SearchResults searchResults={state.searchResults}/>
      )
    )
  }

  return(
    <div className="search__container">
      <div className="search__bar">
        <label className="search__label" htmlFor="search__input">
          <SvgMovie />
        </label>
        <input 
          type="text" 
          id="search__input" 
          className="search__input" 
          placeholder="Enter movie name" 
          onChange={handleInput}>
        </input>
        <SvgSearch />
      </div>
      {renderResults(state.searchResults)}
    </div>
  )
}

export default Search;