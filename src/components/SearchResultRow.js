import React from 'react';
import './SearchResultRow.scss';

const SearchResultRow = ({ title, date, rating }) => {
  const year = new Date(date).getFullYear();
  return (
    <li className="search-result__row">
      <p className="search-result__title">{title}</p>
      <p className="search-result__info">
        <span className="search-result__info-rating">{rating} Rating</span>
        {!isNaN(year) && <span className="search-result__info-year">, {year}</span>}
      </p>
    </li>
  )
}

export default SearchResultRow;
