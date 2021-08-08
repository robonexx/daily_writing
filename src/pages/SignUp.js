import './SignUp.scss'
import {Link} from 'react-router-dom'

const SignUp = () => {

    return (
        <div className="signUp">
            <form className="signUpForm" >
                <h1>Sign Up</h1>

                <label>E-mail</label>
                <input type="text" className="signUpInput" placeholder="Enter e-mail"></input>
                <label>Password</label>
                <input type="password" className="SignUpInput" placeholder="Enter password"></input>
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