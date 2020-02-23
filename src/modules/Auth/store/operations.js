import Actions from './actions';

// const { loginUser } = Actions;
const { logoutUser } = Actions;
const { loginUserStart } = Actions;
const { loginUserSuccess } = Actions;

// TODO - middleware logic here (Thunk)
// https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7

const loginUser = () => async (dispatch, getState) => {
  const state = getState();
  if (state.auth.loading) {
    return;
  }
  dispatch(loginUserStart());
  setTimeout(() => dispatch(loginUserSuccess()), 1500);
};

export default {
  loginUser,
  logoutUser,
};
