import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUrls } from '../../selectors/urlSelectors';
import { setUrls } from '../../actions/urlActions';
import styles from './UrlDisplay.css';


const UrlDisplay = () => {


  useEffect(() => {
    dispatch(setUrls());
  }, []);

  const urls = useSelector(getAllUrls);
  const dispatch = useDispatch();

  const allUrls = urls.map((url, i) => {
    return <li key={i}>
      <p>Original URL: <br /><a href={url.originalURL} target='blank'>{url.originalURL}</a></p>
      <p>Shortened URL: <br /><a href={url.shortUrl} target='blank'>{url.shortUrl}</a></p>
    </li>;
  });

  if(urls.length >= 0)
    return (
      <section className={styles.UrlDisplay}>
        <h2>Your Previous URLs</h2>
        <ul>
          {allUrls}
        </ul>
      </section>
    );
};


export default UrlDisplay;
