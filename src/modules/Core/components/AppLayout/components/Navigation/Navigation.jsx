import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'modules/Auth/store';
import styles from './Navigation.scss';

function Navigation() {
  const authorized = useSelector((state) => state.auth.authorized);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  return (
    <div className={styles.NavigationWrapper}>
      {authorized ? (
        <button type="button" onClick={() => dispatch(authOperations.logoutUser())}>
          Logout
        </button>
      ) : (
        <button type="button" onClick={() => dispatch(authOperations.loginUser())}>
          Login
        </button>
      )}
      {loading && 'Loading...'}
    </div>
  );
}

export default Navigation;
