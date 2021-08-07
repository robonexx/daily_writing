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
    return (
        <div className="navbar">
            <div className="navL">
                <InstaIcon className="icon"/>
                <FbIcon className="icon"/>
                <InIcon className="icon"/>
            </div>
            <div className="navCL">
                <img className="profileImg"
                src={UserImage}
                alt=""/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="navCR">Daily Writings</div>
            <div className="navR">
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/write">write</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
            </div>
        </div>
    )
}
