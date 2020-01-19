import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
// import routes from './routes'

import AppLayout from 'modules/Core/components/AppLayout/AppLayout';
import MainView from 'modules/Views/MainView/MainView';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <AppLayout>
        <Switch>
          <Route exact path="/" render={() => <MainView />} />
          <Route exact path="/test" render={() => <div>Missss</div>} />
        </Switch>
      </AppLayout>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

App.defaultProps = {
  history: {},
};

export default hot(App);
