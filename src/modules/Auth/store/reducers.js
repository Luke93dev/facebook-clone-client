// reducers.js
import TYPES from './types';

const INITIAL_STATE = {
  authorized: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TYPES.LOGIN: {
      console.log('1');
      return {
        ...state,
        authorized: true,
      };
    }

    case TYPES.LOGOUT: {
      return {
        ...state,
        authorized: false,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
