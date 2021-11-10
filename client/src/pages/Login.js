import { useRef, useContext } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import axios from 'axios';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {  dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className='login'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type='text'
          className='loginInput'
          placeholder='Name...'
          ref={userRef}
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='Password...'
          ref={passwordRef}
        />
        <button className='loginBtn' type='submit' disabled={isFetching}>
          Login
        </button>
      </form>
      <h2>Dont have an account? Sign up!</h2>
      <Link to='/signup'>
        <button className='signupBtn'>Sign-up</button>
      </Link>
    </div>
  );
};

export default Login;
