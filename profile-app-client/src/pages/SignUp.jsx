import { useState } from 'react'
import axios from 'axios';
import { useNavigate , Link } from 'react-router-dom';
const API_URL = "http://localhost:5005";

function Signup(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [campus, setCampus] = useState('');
    const [course, setCourse] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleCampus = (e) => setCampus(e.target.value);
    const handleCourse = (e) => setCourse(e.target.value);





    const handleSignupSubmit = (e) => {
        e.preventDefault();

        const user = {username, password, campus, course }

        axios.post(`${API_URL}/auth/signup`, user)
        .then(response => {
            console.log('response', response)
            navigate("/login")
        })
        .catch(err => {
            const errorMessage = err.response.data.error;
            setErrorMessage(errorMessage);
        });
    };


    return(
        <div className='signup-page'>
            <h1>Sign-Up Page</h1>
            <form className='signup-page' onSubmit={handleSignupSubmit}>
                <label>Username:</label>
                    <input
                        type='text'
                        value={username}
                        onChange={handleUsername}
                    />
                <label>Password:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={handlePassword}
                    />
                <label>Campus:
                    <select defaultValue={"Default"} value={handleCampus} onChange={campus}>
                        <option
                            value="Default" disabled>Select Campus
                        </option>
                        <option
                            value="Madrid">Madrid
                        </option>
                        <option
                            value="Barcelona">Barcelona
                        </option>
                        <option
                            value="Miami">Miami
                        </option>
                        <option
                            value="Paris">Paris
                        </option>
                        <option
                            value="Berlin">Berlin
                        </option>
                        <option
                            value="Amsterdam">Amsterdam
                        </option>
                        <option
                            value="México">Mexico
                        </option>
                        <option
                            value="Sao Paulo">Sao Paulo
                        </option>
                        <option
                            value="Lisbon">Lisbon
                        </option>
                        <option
                            value="Remote">Remote
                        </option>
                    </select>
                </label>
                <br/>
                <label>Course:
                    <select defaultValue={"Default"} value={handleCourse}  onChange={course}>
                        <option
                            value="Default" disabled>Select Course
                        </option>
                        <option
                            value="Web Dev">Web Dev
                        </option>
                        <option
                            value="UX/UI">UX/UI
                        </option>
                        <option
                            value="Data Analytics">Data Analytics
                        </option>
                        <option
                            value="Cyber Security">Cyber Security
                        </option>
                    </select>
                </label>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
            { errorMessage && <p className="error-message">{errorMessage}</p> }
            <Link to={"/login"}> Login</Link>
        </div>
    )
}

export default Signup;