import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.scss';
import SidebarImage from '../../assets/images/happiness.jpg';
const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('/categories');
      setCategories(res.data);
    };
    getCategories();
  }, []);
  return (
    <div className='sidebar'>
      <div className='sidebarContent'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {categories.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className='link'>
              <li className='sidebarItems'>{cat.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarAbout'>
        <span className='sidebarTitle'>About</span>
        <img className='sidebarImg' src={SidebarImage} alt='' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
          tincidunt pulvinar. Maecenas congue arcu sed est iaculis placerat.
          Morbi sit amet turpis ac erat sollicitudin accumsan quis ut urna.
          Vivamus egestas risus ut ligula consectetur dictum. Mauris diam ex,
          sagittis et luctus hendrerit, dignissim ac arcu. Phasellus id nunc.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
