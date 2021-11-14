import './Header.scss'
import HomepageImg from '../../assets/images/articles.jpg'


const Header = () => {
    return ( 
        <div className="header">
            <div className="title">
                <span>Articles</span>
            </div>
            <img
            className="headerImg"
            src={HomepageImg}
            alt=""/>
        </div>
     );
}
 
export default Header;