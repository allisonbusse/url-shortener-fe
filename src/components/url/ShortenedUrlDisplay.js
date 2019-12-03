import React from 'react';

const ShortenedUrlDisplay = ({ urlref, handleClick }) => {

  return (
    <textarea ref={urlref} value={shortened}>{shortened}</textarea><button onClick={handleClick}>Copy</button>
    <p>{copied}</p>

  )
}