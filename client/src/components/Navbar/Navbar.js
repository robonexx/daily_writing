import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import styled from 'styled-components';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Search } from '@styled-icons/evil/Search';
import UserImage from '../../assets/images/ruperto.jpg';
import { Context } from '../../context/Context';

const InstaIcon = styled(Instagram)``;
const FbIcon = styled(FacebookCircle)``;
const InIcon = styled(Linkedin)``;
const SearchIcon = styled(Search)``;

export default function Navbar() {
  /* Profile img i show if user sign in is true if not signed in will show two buttons for either login or sign up */
  const { user, dispatch } = useContext(Context);

  const PF = 'http://localhost:5000/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className='navbar'>
      <div className='navL'>
        {user ? (
          <Link to='/settings'>
            <img
              className='profileImg'
              src={PF + user.profilePicture}
              alt='user profile image'
            />
          </Link>
        ) : (
          <ul>
            <li className='listItems'>
              <Link className='link' to='/login'>
                Login
              </Link>
            </li>
            <li className='listItems'>
              <Link className='link' to='/signup'>
                Sign up
              </Link>
            </li>
          </ul>
        )}
        <SearchIcon className='searchIcon' />
      </div>

      <div className='navCL'>
        <InstaIcon className='icon' />
        <FbIcon className='icon' />
        <InIcon className='icon' />
      </div>
      <div className='navCR'>Daily Writings</div>
      <div className='navR'>
        <ul className='ulItems'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/write'>write</Link>
          </li>
          {user && (
            <li>
              <Link to='/' onClick={handleLogout}>
                logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
