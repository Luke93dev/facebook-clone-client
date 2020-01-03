import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation';

function AppLayout({ children }) {
  /*
      "editor.codeActionsOnSave": {
        "source.fixAll": true
    }
    */
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
