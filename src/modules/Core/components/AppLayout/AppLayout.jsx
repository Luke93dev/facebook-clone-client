import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation';
import styles from './AppLayout.scss';

function AppLayout({ children }) {
  /*
      "editor.codeActionsOnSave": {
        "source.fixAll": true
    }
    */
  return (
    <div>
      <Navigation />
      <div className={styles.ContentWrapper}>{children}</div>
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
