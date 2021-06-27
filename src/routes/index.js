import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app';
import Login from 'src/components/login';
import { getUser } from '../components/login/login.api';

// function AuthComponent(props) {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         getUser()
//             .then(json => {
//                 setIsLoggedIn(json.isLoggedIn);
//                 setIsLoading(false);
//             }).catch(err => {
//                 setIsLoggedIn(false);
//                 setIsLoading(false);
//             })
//     }, []);

//     return (
//         <>
//             {
//                 isLoading ? <p>Loading...</p> : (
//                     <>
//                         {props.children}
//                     </>
//                 )
//             }
//         </>
//     )
// }

// function PrivateComponent(component) {
//     return (
//         <AuthComponent>{component}</AuthComponent>
//     )
// }

function RoutesManager() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={App} />
            </Switch>
        </Router>
    );
}

export default RoutesManager;
