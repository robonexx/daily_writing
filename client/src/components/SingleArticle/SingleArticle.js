import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import './SingleArticle.scss';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import { Delete } from '@styled-icons/fluentui-system-regular/Delete';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EditIcon = styled(EditAlt)``;
const DeleteIcon = styled(Delete)``;


const SingleArticle = () => {
  const [art, setArt] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get('/articles/' + path);
      setArt(res.data);
    };
    getArticle();
  }, [path]);
  return (
    <div className='singleArticle'>
      <div className='Wrapper'>
        {art.photo && (
          <img className='singleArticleImage' src={art.photo} alt='' />
        )}

        <div className='singleArticleTitleBox'>
          <h1 className='singleArticleTitle'>{art.title}</h1>
          <div>
            <EditIcon className='icon editBtn' />
            <DeleteIcon className='icon deleteBtn' />
          </div>
        </div>
        <div className='singleArticleInfo'>
          <span className='author'>
            <Link to={`/?user=${art.username}`}>
              Author: <b>{art.username}</b>
            </Link>
          </span>
          <span className='singleArticleDate'>
            posted: <b>{new Date(art.createdAt).toDateString()}</b>
          </span>
        </div>
        <p className='singleArticleText'>{art.desc}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
