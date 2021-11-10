import './Login.scss'
import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <div className="login">
            <form className="loginForm" >
                <h1>Login</h1>
                
                <label>E-mail</label>
                <input type="text" className="loginInput" placeholder="Enter e-mail"></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter password"></input>
                <button className="loginBtn">Login</button>
            </form>
            <h2>Dont have an account? Sign up!</h2>
            <Link to="/signup">
                <button className="signupBtn">Sign-up</button>
            </Link>
        </div>
     );
}
 
export default Login;