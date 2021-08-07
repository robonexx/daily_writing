import './Articles.scss'
import Article from '../article/Article'
import articleImg from '../../assets/images/write.jpg'

const Articles = () => {
    return ( 
        <div className="articles">
            <Article img={articleImg}/>
            <Article img={articleImg}/>
            <Article img={articleImg}/>
            <Article img={articleImg}/>
            <Article img={articleImg}/>
        </div>
     );
}
 
export default Articles;