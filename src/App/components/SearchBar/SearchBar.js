import React from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.sass';

const SearchBar = ({ handleUserSearch, handleInput }) => {
  return (
    <form action='' onSubmit={handleUserSearch}>
      <label htmlFor='search'>
        <FontAwesomeIcon icon={faSearch} className='fa__search' />
        <input
          name='search'
          type='text'
          placeholder='np. warszawa'
          onChange={handleInput}
        />
      </label>
      <button type='submit' className='search__btn yellow__bg'>
        WYSZUKAJ
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  handleUserSearch: propTypes.func.isRequired,
  handleInput: propTypes.func.isRequired,
};
export default SearchBar;
