import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'modules/Auth/store';
import styles from './Navigation.scss';

function Navigation() {
  const authorized = useSelector((state) => state.auth.authorized);
  const dispatch = useDispatch();

  return (
    <div className={styles.NavigationWrapper}>
      <button type="button" onClick={() => dispatch(authOperations.loginUser())}>
        Login
      </button>
      <button type="button" onClick={() => dispatch(authOperations.logoutUser())}>
        Logout
      </button>
      {authorized ? 'Logged In' : 'Not Authorized'}
    </div>
  );
}

export default Navigation;
