import React from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './NavBar.sass';

const NavBar = ({ searchPanel, showSearchPanel }) => {
  return (
    <section className='nav__wrapper dark__bg'>
      <nav className='rwd__container'>
        {searchPanel ? null : (
          <button type='button' className='nav__btn' onClick={showSearchPanel}>
            wyszukaj...
            <FontAwesomeIcon icon={faSearch} className='search__icon' />
          </button>
        )}
      </nav>
    </section>
  );
};

NavBar.propTypes = {
  searchPanel: propTypes.bool.isRequired,
  showSearchPanel: propTypes.func.isRequired,
};

export default NavBar;
