import React from 'react';
import SearchResultRow from './SearchResultRow';
import './SearchResults.scss';

const SearchResults = ({ searchResults }) => {
  
  if (searchResults.length > 8) {
    const reducedSearchResults = searchResults.slice(0, 8);
    return (
      <ul className="search__results">
        {reducedSearchResults.map(searchResult => 
          <SearchResultRow 
          key={searchResult.id}
          title={searchResult.title}
          date={searchResult.release_date}
          rating={searchResult.vote_average}
          />
        )}
      </ul>
    )
  } else {
    return (
      <ul className="search__results">
      {searchResults.map(searchResult => 
        <SearchResultRow 
        key={searchResult.id}
        title={searchResult.title}
        date={searchResult.release_date}
        rating={searchResult.vote_average}
        />
        )}
      </ul>
    )
  }
}

export default SearchResults;
