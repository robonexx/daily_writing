export const Login = (userCredentials) => ({
  type: 'LOGIN',
});

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const Logout = () => ({
  type: 'LOGOUT',
});

export const Update = (userCredentials) => ({
  type: 'UPDATE',
});

export const UpdateSuccess = (user) => ({
  type: 'UPDATE_SUCCESS',
  payload: user,
});

export const UpdateFailure = () => ({
  type: 'UPDATE_FAILURE',
});
