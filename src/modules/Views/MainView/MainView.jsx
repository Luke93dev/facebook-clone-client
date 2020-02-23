import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home/Home';
import NotAuthorized from './NotAuthorized/NotAuthorized';

function MainView() {
  const authorized = useSelector((state) => state.auth.authorized);

  return authorized ? <Home /> : <NotAuthorized />;
}

export default MainView;
