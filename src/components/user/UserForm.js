import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';

const UserForm = ({ handleSubmit, buttonLabel }) => {
  const sessionId = useSelector(state => getSessionId(state));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if(sessionId) return <Redirect to="/" />;

  return (
    <form onSubmit={event => handleSubmit(event, username, password)}>
      <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />;
      <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />;
      <button>{buttonLabel}</button>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default UserForm; 

