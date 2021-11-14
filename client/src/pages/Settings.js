import './Settings.scss';
import { Link } from 'react-router-dom';
import profImg from '../assets/images/ruperto.jpg';
import styled from 'styled-components';
import { User } from '@styled-icons/evil/User';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';
import axios from 'axios';

const PlusIcon = styled(User)``;

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';

  const handleUpdate = async (e) => {
    dispatch({ type: 'UPDATE' });
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
      console.log(err);
    }
  };
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <h1>Update Profile</h1>
        </div>

        <form className='settingsForm' onSubmit={handleUpdate}>
          <label>Profile picture</label>
          <div className='settingsProfilePic'>
            <img
              className='settingsImg'
              src={file ? URL.createObjectURL(file) : PF+user.profilePicture}
              alt=''
            />
            <label htmlFor='fileInput'>
              <PlusIcon className='settingsProfilePicIcon' />
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className='settingInputs'>
            <label>Username:</label>
            <input
              type='text'
              placeholder={user.username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className='settingInputs'>
            <label>Email:</label>
            <input
              type='text'
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className='settingInputs'>
            <label>Password:</label>
            <input
              type='password'
              placeholder='**********'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button className='settingsBtn' type='submit'>
            Update
          </button>
          {success && (
            <span
              style={{ color: '#defade', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
