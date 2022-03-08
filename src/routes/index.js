import React from 'react';
import { Switch, Route} from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Agent from '../pages/Dashboard/Agent';
import Cenas from '../pages/Dashboard/Cenas';
import CenaAovivo from '../pages/Dashboard/CenaAovivo';
import CreateCena from '../pages/Dashboard/CreateCena';
import Modal from '../pages/Dashboard/Modal';

export default function Routes(){
    return (
        <Switch>
            <Route path= "/" exact component={SignIn} />
            <Route path= "/dashboard" component={Dashboard} />
            <Route path= "/agent" component={Agent} />
            <Route path= "/cenas" component={Cenas} />
            <Route path= "/aovivo" component={CenaAovivo} />
            <Route path= "/create" component={CreateCena} />
            <Route path= "/modal" component={Modal} />
        </Switch>
    );
}