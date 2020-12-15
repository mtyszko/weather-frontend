import React from 'react';
import propTypes from 'prop-types';

import './NavBar.sass';

const NavBar = ({ searchPanel, showSearchPanel }) => {
  return (
    <section className='nav__wrapper dark__bg'>
      <nav className='nav__bar rwd__container'>
        {searchPanel ? null : (
          <button
            type='button'
            className='nav__btn yellow__bg light__text'
            onClick={showSearchPanel}
          >
            wyszukaj
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
