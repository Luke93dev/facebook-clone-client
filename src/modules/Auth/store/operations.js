import Actions from './actions';

const { loginUser } = Actions;
const { logoutUser } = Actions;

// TODO - middleware logic here (Thunk)
// https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7

export default {
  loginUser,
  logoutUser,
};
