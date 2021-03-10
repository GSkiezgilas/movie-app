import React, { useEffect, useRef } from 'react';
import SearchResultRow from './SearchResultRow';
import './SearchResults.scss';


const SearchResults = ({ searchResults, updateSelectedResult, setState }) => {
  const wrapperRef = useRef(null);
 
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = e => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setState(prevState => {
        return { ...prevState, display: false };
      });
    }
  };

  if (searchResults.length > 8) {
    const reducedSearchResults = searchResults.slice(0, 8);
    return (
      <ul ref={wrapperRef} className="search__results">
        {reducedSearchResults.map(searchResult => 
          <SearchResultRow 
          key={searchResult.id}
          title={searchResult.title}
          date={searchResult.release_date}
          rating={searchResult.vote_average}
          updateSelectedResult={updateSelectedResult}
          />
        )}
      </ul>
    )
  } else {
    return (
      <ul ref={wrapperRef} className="search__results">
      {searchResults.map(searchResult => 
        <SearchResultRow 
        key={searchResult.id}
        title={searchResult.title}
        date={searchResult.release_date}
        rating={searchResult.vote_average}
        updateSelectedResult={updateSelectedResult}
        />
        )}
      </ul>
    )
  }
}

export default SearchResults;
