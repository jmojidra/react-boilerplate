

export const setAuthentication = (credentials?) => {
    if (credentials) {
        localStorage.setItem('demo_user', (JSON.stringify(credentials)))
    } else {
        localStorage.removeItem('demo_user');
    }
}

export const isAuthenticated = () => {
    return getAuthenticatedUser() ? true : false
}

export const getAuthenticatedUser = () => {
    const loggedInUser = localStorage.getItem('demo_user')
    if (loggedInUser) {
        return JSON.parse(loggedInUser);
    } else {
        return null;
    }
}