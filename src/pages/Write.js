import './Write.scss'
import styled from 'styled-components'
import {Plus} from '@styled-icons/boxicons-regular/Plus'

const PlusIcon = styled(Plus)`
`

const Write = () => {
    return ( 
        <div className="writepage">
            <h1>Write New Article</h1>
            <form className="Form">
                <div className="FormWrapper">
                    <label htmlFor="fileInput">
                        <PlusIcon className="icon" />
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeTitle" />
                </div>
                <div className="FormWrapper">
                    <textarea name="writeText" placeholder="Write here..." className="writeInput writeText" >

                    </textarea>
                </div>
                <button className="writeSubmit" type="submit">New Article</button>
            </form>
        </div>
     );
}
 
export default Write;