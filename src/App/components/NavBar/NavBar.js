import React from 'react';
import propTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';

import './NavBar.sass';

const NavBar = ({ handleUserSearch, handleInput }) => {
  return (
    <section className='nav--wrapper dark--bg'>
      <nav className='rwd--container'>
        <div className='search--bar--container'>
          <SearchBar
            handleUserSearch={handleUserSearch}
            handleInput={handleInput}
          />
        </div>
        ch,
      </nav>
    </section>
  );
};

NavBar.propTypes = {
  handleUserSearch: propTypes.func.isRequired,
  handleInput: propTypes.func.isRequired,
};

export default NavBar;
