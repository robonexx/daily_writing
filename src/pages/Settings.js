import './Settings.scss'
import profImg from '../assets/images/ruperto.jpg'
import styled from 'styled-components'
import {User} from '@styled-icons/evil/User'


const PlusIcon = styled(User)`
`


const Settings = () => {
    return ( 
        <div className="settings">
            <div className="settingsWrapper" >
                <div className="settingsTitle">
                    <span className="settingsUpdate">Update</span>
                    <span className="settingsDelete">Delete</span>
                </div>

                <form className="settingsForm">
                    <label>Profile picture</label>
                <div className="settingsProfilePic" >
                    <img
                className="settingsImg"
                src={profImg}
                alt=""
                />
                <label htmlFor="fileInput">
                    <PlusIcon className="settingsProfilePicIcon" />
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
                </div>

                <div className="settingInputs" >
                <label>Username:</label>
                <input type="text" placeholder="Rupert"></input>
                </div>
                <div className="settingInputs" >
                <label>Email:</label>
                <input type="text" placeholder="mail@mail.mail"></input>
                </div>
                <div className="settingInputs" >
                <label>Password:</label>
                <input type="password" placeholder="**********"></input>
                </div>
                

                   <button className="settingsBtn">Done</button>
                </form>
                
            </div>
        </div>
     );
}
 
export default Settings;