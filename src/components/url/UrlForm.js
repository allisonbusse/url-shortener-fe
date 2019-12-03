import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UrlForm.css';

const UrlForm = ({ handleSubmit }) => {

  const [url, setUrl] = useState('');

  return (
    <section className={styles.UrlForm}>
      <form onSubmit={event => handleSubmit(event, url)}>
        <input type='text' value={url} onChange={({ target }) => setUrl(target.value)} />
        <button>Shorten It</button>
      </form>
    </section>

  );
};

UrlForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default UrlForm;
