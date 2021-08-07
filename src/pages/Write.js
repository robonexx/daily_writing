import './Write.scss'
import styled from 'styled-components'
import {Plus} from '@styled-icons/boxicons-regular/Plus'
import writeImg from '../assets/images/dancingwithkid.jpg'

const PlusIcon = styled(Plus)`
`

const Write = () => {
    return ( 
        <div className="writepage">
            <h1>Write New Article</h1>
            <div className="writeWrapper">
            <img 
            className="writeImg"
            src={writeImg}
            alt=""
            />
            <form className="Form">
                <div className="FormWrapper">
                    <label htmlFor="fileInput">
                        <PlusIcon className="icon" />
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Write title" className="writeTitle" />
                </div>
                <div className="FormWrapper">
                    <textarea name="writeText" type="text" placeholder="Write here..." className="writeInput writeText" >

                    </textarea>
                </div>
                <button className="writeBtn" type="submit">New Article</button>
            </form>
            </div>
        </div>
     );
}
 
export default Write;