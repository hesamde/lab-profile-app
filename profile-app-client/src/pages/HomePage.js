import React from 'react'
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className='container'>
            <h1 className='home-name'>Iron Profile</h1>
            <p>
            Today we will create an app with authoritation, adding some cool styles!
            </p>
                <Link to="/signup"><button className='signup-button' type="button">Sign Up</button></Link>
                <Link to="/signup"><button className='login-button' type="button">Log in </button></Link>
        </div>
    )
}

export default  Homepage;
