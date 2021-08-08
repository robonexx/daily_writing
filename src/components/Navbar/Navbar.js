import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import styled from 'styled-components'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle'
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Search} from '@styled-icons/evil/Search'
import UserImage from '../../assets/images/ruperto.jpg'

const InstaIcon = styled(Instagram)` 
`
const FbIcon = styled(FacebookCircle)`

`
const InIcon = styled(Linkedin)`
  
`
const SearchIcon = styled(Search)`
  
`


export default function Navbar() {

  /* Profile img i show if user sign in is true if not signed in will show two buttons for either login or sign up */
  const user = true;
    return (
        <div className="navbar">
            <div className="navL">
                <InstaIcon className="icon"/>
                <FbIcon className="icon"/>
                <InIcon className="icon"/>
        </div>
        
        <div className="navCL">
          {
            user ? (
                <img className="profileImg"
                src={UserImage}
              alt="" />
            ) : (
                <ul>
                  <li className="listItems">
                      <Link className="link" to="/login">Login</Link>
                  </li>
                  <li className="listItems">
                      <Link className="link" to="/signup">Sign up</Link>
                  </li>
                </ul>
            )
          } 
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="navCR">Daily Writings</div>
            <div className="navR">
            <ul className="ulItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/write">write</Link>
            </li>
            { user ? (
            <li>
              <Link to="/login">login</Link>
              </li>) :
              (
            <li>
              <Link to="/logout">logout</Link>
                </li>
              )
            }
          </ul>
            </div>
        </div>
    )
}
