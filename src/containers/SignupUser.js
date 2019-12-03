import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignup } from '../actions/sessionActions';

const SignupUser = () => {

  const buttonLabel = 'Sign Up';
  const dispatch = useDispatch();
  const handleSubmit = (event, username, password) => {

    event.preventDefault();
    dispatch(sessionSignup(username, password));
  };

  return (
    <UserForm buttonLabel={buttonLabel} handleSubmit={handleSubmit} />
  );
};

export default SignupUser;
