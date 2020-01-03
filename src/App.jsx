import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
// import routes from './routes'

import AppLayout from './modules/Core/components/AppLayout/AppLayout.jsx';

const App = ({ history }) => {
  console.log(history);
  console.log('render');
  const test = 3;
  return (
    <ConnectedRouter history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/" render={() => <div>Match</div>} />
          <Route exact path="/test" render={() => <div>Missss</div>} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default hot(App);
