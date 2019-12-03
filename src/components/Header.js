import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ signOut }) => (
  <section className={styles.Header}>
    <div>
      <h1>Shorts Weather</h1>
      <h3>A URL Shortener</h3>
    </div>
    <button onClick={signOut}>Sign Out</button>
  </section>
);

Header.propTypes = {
  signOut: PropTypes.func
};

export default Header;
