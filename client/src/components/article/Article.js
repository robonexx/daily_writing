import { Link } from 'react-router-dom';
import './Article.scss';

const Article = ({ article }) => {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className='article'>
      {article.photo && (
        <img className='articleImg' src={PF + article.photo} alt='' />
      )}

      <div className='articleInfo'>
        {article.categories.map((cat) => (
          <span className='articleCat'>{cat.name}</span>
        ))}
      </div>
      <div className='articleTitle'>
        <Link to={`/article/${article._id}`} className='link'>
          {article.title}
        </Link>
      </div>
      <span className='articleDate'>
        {new Date(article.createdAt).toDateString()}
      </span>
      <p className='articleText'>{article.desc}</p>
    </div>
  );
};

export default Article;
