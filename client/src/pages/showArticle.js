import './showArticle.scss'
import SingleArticle from '../components/SingleArticle/SingleArticle';
import {Link} from 'react-router-dom'


const ShowArticle = ({img}) => {
    return ( 
        <div className="articlespage">
            <SingleArticle />
        </div>
     );
}
 
export default ShowArticle;

