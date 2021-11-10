import { useContext, useState } from 'react';
import './Write.scss';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import writeImg from '../assets/images/dancingwithkid.jpg';
import axios from 'axios';
import { Context } from '../context/Context';

const PlusIcon = styled(Plus)``;

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newArticle.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post('/articles', newArticle);
      window.location.replace('/article/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='writepage'>
      <h1>Write New Article</h1>
      <div className='writeWrapper'>
        {file && (
          <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
        )}

        <form className='Form' onSubmit={handleSubmit}>
          <div className='FormWrapper'>
            <label htmlFor='fileInput'>
              <PlusIcon className='icon' />
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type='text'
              placeholder='Write title'
              className='writeTitle'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='FormWrapper'>
            <textarea
              name='writeText'
              type='text'
              placeholder='Write here...'
              className='writeInput writeText'
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className='writeBtn' type='submit'>
            New Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default Write;
