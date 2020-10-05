import React from 'react';
import propTypes from 'prop-types';

import './SearchBar.sass';

const SearchBar = ({ handleSearch, handleInput }) => {
  return (
    <section className='nav--wrapper dark--bg'>
      <nav>
        <form action='' onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='np. Legionowo'
            onChange={handleInput}
          />
          <button type='submit' className='search--btn yellow--bg'>
            WYSZUKAJ
          </button>
        </form>
      </nav>
    </section>
  );
};

SearchBar.propTypes = {
  handleSearch: propTypes.func.isRequired,
  handleInput: propTypes.func.isRequired,
};
export default SearchBar;
