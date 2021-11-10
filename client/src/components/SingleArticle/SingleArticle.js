import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import './SingleArticle.scss';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import { Delete } from '@styled-icons/fluentui-system-regular/Delete';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const EditIcon = styled(EditAlt)``;
const DeleteIcon = styled(Delete)``;

const SingleArticle = () => {
  const [art, setArt] = useState({});
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [update, setUpdate] = useState(false);

  const { user } = useContext(Context);

  const PF = 'http://localhost:5000/images/';

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get('/articles/' + path);
      setArt(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getArticle();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/articles/${art._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/articles/${art._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload('/');
    } catch (err) {}
  };

  return (
    <div className='singleArticle'>
      <div className='Wrapper'>
        {art.photo && (
          <img className='singleArticleImage' src={PF + art.photo} alt='' />
        )}
        <div className='singleArticleTitleBox'>
          {update ? (
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='singleArticleTitleInput'
            />
          ) : (
            <h1 className='singleArticleTitle'>{art.title}</h1>
          )}

          {art.username === user?.username && (
            <div>
              <EditIcon
                className='icon editBtn'
                onClick={() => setUpdate(true)}
              />
              <DeleteIcon className='icon deleteBtn' onClick={handleDelete} />
            </div>
          )}
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
        {update ? (
          <textarea
            className='singleArticleTextInput'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className='singleArticleText'>{art.desc}</p>
        )}
        {update && (
          <button className='updateBtn' onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleArticle;
