import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionLogin } from '../actions/sessionActions';

const LoginUser = () => {

  const buttonLabel = 'Login';
  const dispatch = useDispatch();
  const handleSubmit = (event, username, password) => {
    event.preventDefault();
    dispatch(sessionLogin(username, password));
  };

  return (
    <UserForm buttonLabel={buttonLabel} handleSubmit={handleSubmit} />
  );
};

export default LoginUser;
