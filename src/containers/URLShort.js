import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UrlForm from '../components/url/UrlForm';
import { createUrl } from '../actions/urlActions';
import { getShortenedUrl } from '../selectors/urlSelectors';
import UrlDisplay from '../components/url/UrlDisplay';
import Header from '../components/Header';
import styles from './URLShort.css';
import { resetSession } from '../actions/sessionActions';

const URLShort = () => {
  const [copied, setCopied] = useState('');
  const dispatch = useDispatch();
  const urlref = useRef(null);
  let shortened = useSelector(getShortenedUrl);
  if(shortened !== undefined) shortened = shortened.shortURL;

  const handleSubmit = (event, url) => {
    event.preventDefault();
    dispatch(createUrl(url));
  };

  const handleClick = () => {
    urlref.current.select();
    document.execCommand('copy');
    setCopied('Copied!');
  };

  const signOut = () => {
    dispatch(resetSession());
  };

  return (
    <>
      <Header signOut={signOut} />
      <UrlForm handleSubmit={handleSubmit} />
      <section className={styles.URLShort}>
        <textarea ref={urlref} value={shortened}>{shortened}</textarea><button onClick={handleClick}>Copy</button>
        <p>{copied}</p>
      </section>
      <UrlDisplay />
    </>
  );
};

export default URLShort;
