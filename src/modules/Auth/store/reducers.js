// reducers.js
import TYPES from './types';

const INITIAL_STATE = {
  authorized: false,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOGIN: {
      return {
        ...state,
        authorized: true,
      };
    }

    case TYPES.LOGIN_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case TYPES.LOGIN_SUCCESS: {
      return {
        ...state,
        authorized: true,
        loading: false,
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
