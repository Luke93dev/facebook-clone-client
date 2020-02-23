import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from 'modules/Auth/store';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });

export default rootReducer;
