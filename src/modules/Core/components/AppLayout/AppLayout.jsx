import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './components/Navigation/Navigation.jsx';

function AppLayout(props) {
  return (
    <div>
      <Navigation />
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
