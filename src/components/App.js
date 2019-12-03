import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import './App.css';
import URLShort from '../containers/URLShort';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(state => getSessionId(state));
  const loading = useSelector(state => getSessionLoading(state));
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    return <Redirect to='/login' />;
  }

  return <Route { ...rest } />;
};

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Auth} />
          <PrivateRoute exact path='/' component={URLShort} />
        </Switch>
      </Router>
    </>
  );
}
