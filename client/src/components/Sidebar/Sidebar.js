import './Sidebar.scss'
import SidebarImage from '../../assets/images/happiness.jpg'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="sidebarContent">
                <span className="sidebarTitle">Categories</span>
                    <ul className="sidebarList">
                        <li className="sidebarItems" >Dance</li>
                        <li className="sidebarItems" >Health</li>
                        <li className="sidebarItems" >Music</li>
                        <li className="sidebarItems" >Life</li>
                        <li className="sidebarItems" >Coding</li>
                    </ul>

            </div>
            <div className="sidebarContent">
                <span className="sidebarTitle">About</span>
                    <img className="sidebarImg"
                    src={SidebarImage}
                    alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat tincidunt pulvinar. Maecenas congue arcu sed est iaculis placerat. Morbi sit amet turpis ac erat sollicitudin accumsan quis ut urna. Vivamus egestas risus ut ligula consectetur dictum. Mauris diam ex, sagittis et luctus hendrerit, dignissim ac arcu. Phasellus id nunc.</p>
            </div>

            
        </div>
     );
}
 
export default Sidebar;