import { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

const LogIn=(props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(undefined);
    const { storeToken, authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = { username, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
        .then(response => {
            console.log('response data', response.data)
            storeToken(response.data.authToken)
            authenticateUser()// update my state variables
            // response.data.message --> "Login was successful"
            setSuccessMessage(response.data.message)
            navigate("/")
            .catch(err => {
                const errorMessage = err.response.data.error;
                setErrorMessage(errorMessage);
            });
        })
    };

    return(
        <div>
        <h1 className="login-page">Login Page</h1>

            <form className="login-page" onSubmit = {handleSubmit}>
                <label>Username:</label>
                    <input
                    type="username"
                    name="username"
                    value={username}
                    onChange = {handleUsername}
                />
                <br />
                <label>Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange = {handlePassword}/>
                <br />
                <button type="submit">Login</button>

            </form>
            { errorMessage && <p className="error-message">{errorMessage}</p> }
            {successMessage && <p>{successMessage}</p>}
            <p className="login-page">Don't have an account yet?</p>
            <Link className="login-page" to={"/signup"}> Sign Up</Link>
        </div>
    )

}

export default LogIn;