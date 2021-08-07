import './ArticlesPage.scss'
import SingleArticle from '../components/SingleArticle/SingleArticle';
import {Link} from 'react-router-dom'


const ArticlesPage = ({img}) => {
    return ( 
        <div className="articlespage">
            <SingleArticle />
        </div>
     );
}
 
export default ArticlesPage;

