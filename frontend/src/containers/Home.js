import React from 'react';
import {Link} from'react-router-dom';


const Home = (props) => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Auth System</h1>
            <p className="lead">Production level Features</p>
            <hr className="my-4"/>
            <p>Login</p>
            <Link className="btn btn-primary btn-lg" to="/login" role="button">Learn more</Link>
        </div>
    </div>

);

export default Home;