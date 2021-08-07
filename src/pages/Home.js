import './Home.scss'
import {Link} from 'react-router-dom'
import Header from '../components/Header/Header'
import Articles from '../components/articles/Articles'
import Sidebar from '../components/Sidebar/Sidebar'
import ArticlesPage from '../pages/ArticlesPage'
import Write from '../pages/Write'

const Home = () => {
    return ( 
        <div className="homepage">
            <Sidebar />             
             <div className="homeSection">
            {/*  <Header />
            <Articles /> */}
            {/* <ArticlesPage /> */}
            <Write />

            {/* <Link className="link" path="/articles/life">
            <ArticlesPage />
            </Link> */}
           
            </div>
        </div>
     );
}
 
export default Home;