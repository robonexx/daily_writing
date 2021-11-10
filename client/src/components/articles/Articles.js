import './Articles.scss'
import Article from '../article/Article'


const Articles = ({articles}) => {
    return ( 
        <div className="articles-container">
            {articles.map((art) => (
                <Article article={art} key={art._id}/>
            ))}
            
        </div>
     );
}
 
export default Articles;