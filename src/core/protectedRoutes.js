import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={(props) => (
                isAuthenticated()
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login' }} />

            )}
        />
    )
}

export default ProtectedRoute;