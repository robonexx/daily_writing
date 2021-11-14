import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './Home.scss';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Articles from '../components/articles/Articles';
import Sidebar from '../components/Sidebar/Sidebar';
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { search } = useLocation();

  console.log(articles);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/articles' + search);
      setArticles(res.data);
    };
    fetchData();
  }, [search]);

  return (
    <div className='homepage'>
      <Sidebar />
      <div className='homeSection'>
        <Header />
        <Articles articles={articles} />
      </div>
    </div>
  );
};

export default Home;
