import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import OpenRoute from '../core/openRoutes';
import ProtectedRoute from '../core/protectedRoutes';
import { isAuthenticated, setAuthentication } from '../core/auth';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Post from '../pages/post';
import Counter from './../pages/counter';
import './layout.css';


const Layout = (props) => {

    const doLogout = () => {
        setAuthentication();
        props.history.push('/login');
    }

    return (
        <div>
            <header>
                <ul>
                    {!isAuthenticated() && <li> <Link to="/login">Login</Link></li>
                    }
                    <li> <Link to="/" >home</Link></li>
                    {isAuthenticated() &&
                        <>
                            <li> <Link to="/post">Post</Link></li>
                            <li> <Link to="/redux-demo">Redux Demo (Class)</Link></li>
                            <li> <a onClick={() => doLogout()} >Logout</a></li>
                        </>
                    }
                </ul>
            </header>
            <Switch>
                <Route path="/" exact component={Landing} />
                <OpenRoute path="/login" component={Login} />
                <ProtectedRoute path="/post" component={Post} />
                <ProtectedRoute path="/redux-demo" component={Counter} />
                <Route path="/" render={() => { <h1> Route Not Found </h1> }} />
            </Switch>
        </div>
    )
}

export default withRouter(Layout)