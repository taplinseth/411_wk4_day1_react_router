/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react';
import { Switch, Route } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Car from './components/Car';



// Start Router function here //
export default function Router() {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/car/:id" component={Car} />
    </Switch>

    )

}
