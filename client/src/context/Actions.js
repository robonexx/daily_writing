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