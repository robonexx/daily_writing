import { Link } from 'react-router-dom'
import './Article.scss'
import PostImg from '../../assets/images/write.jpg'

const Article = ({img}) => {

    return ( 

        <div className="article">
            <img 
            className="articleImg"
            src={img}
            alt="" />
            <div className="articleInfo">
                <span className="articleCat">
                <Link className="link" to="/articles?cat=Dance">
              Dance
            </Link>
                </span>
                <span className="articleCat">
                <Link className="link" to="/articles?cat=Life">
              Life
            </Link>
                    </span>
            </div>
            <div className="articleTitle">
            <Link to="/article/abc" className="link">
            Dance is Life
          </Link></div>
            <span className="articleDate">1 hour ago</span>
                <p className="articleText">lrenjanvg hpoigjinoåa oiåwgnåoiua wnågioa nåogiuwroiå goiåuareoiågu iånaiågun oiåauiågu niåauwniågu auiigu nioauwågio uåiauwåig niawrugni uåaiåugni oåuawrni giåuanåigu aniåug niåuåiru ginåuawriå ugn8awu guåaworigoiåuwaro ignoiåwruinoå gnoiawuåogi an2wgi aiwruågin ewroi</p>
        </div>
     );
}
 
export default Article;