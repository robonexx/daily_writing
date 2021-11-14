import React, { useState, useEffect } from 'react';
import './Sidebar.scss';
import SidebarImage from '../../assets/images/ruperto.jpg';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarAbout'>
        <span className='sidebarTitle'>About</span>
        <img className='sidebarImg' src={SidebarImage} alt='' />
        <p>
          My name i Rob and this is my first try on a MERN stack. <br />
          A React project using CRUD. react-router-dom, Sass, styled-icons, for
          the backend MongoDB/ Mongoose, express, multer. <br />
          Also using bcrypt for auth. It has a working sign-up, login and
          profile settings page. <br />
          You can create an article, save it, update it and delete it. :D
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
