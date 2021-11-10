import { useState } from 'react';
import './SignUp.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className='signUp'>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>Username</label>
        <input
          type='text'
          className='signUpInput'
          placeholder='Enter your name'
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>E-mail</label>
        <input
          type='text'
          className='signUpInput'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='SignUpInput'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signUpBtn' type='submit'>
          Register account
              </button>
              {error && <span style={{color: "tomato", margin: "1rem"}}>Something went wrong, please try again</span>}
      </form>
      <h2>Already have and account?</h2>
      <Link to='/login'>
        <button className='backBtn'>Login</button>
      </Link>
    </div>
  );
};

export default SignUp;
