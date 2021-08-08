import './SignUp.scss'
import {Link} from 'react-router-dom'

const SignUp = () => {

    return (
        <div className="signUp">
            <form className="signUpForm" >
                <h1>Sign Up</h1>
                <label>Username</label>
                <input type="text" className="signUpInput" placeholder="Enter your name"></input>
                <label>E-mail</label>
                <input type="text" className="signUpInput" placeholder="E-mail"></input>
                <label>Password</label>
                <input type="password" className="SignUpInput" placeholder="Password"></input>
                <button className="signUpBtn">Register account</button>
            </form>
            <h2>Register and account fill in the form.</h2>
            <Link to="/">
            <button className="backBtn">Back</button>
            </Link>
            
        </div>
     );
}
 
export default SignUp;