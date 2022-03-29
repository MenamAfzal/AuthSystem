import React from 'react';
import {Link} from'react-router-dom';


const Home = (props) => (
    <div className='container'>
        <div class="jumbotron mt-5">
            <h1 class="display-4">Welcome to Auth System</h1>
            <p class="lead">Production level Features</p>
            <hr class="my-4"/>
            <p>Login</p>
            <Link class="btn btn-primary btn-lg" to="/login" role="button">Learn more</Link>
        </div>
    </div>

);

export default Home;