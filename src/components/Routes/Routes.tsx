import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';


import Welcome from '../Welcome/Welcome';
import Page from '../../pages/Page';
import Login from '../Login/Login'


const Routes:React.FC=()=>{
    return(
        <Switch>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/" component= {Welcome} exact />
            <Route path="/page/:name" component={Page} exact />
            {/* <Redirect from="/" to="/page/classrooms" exact /> */}
        </Switch>
    );
}

export default Routes;