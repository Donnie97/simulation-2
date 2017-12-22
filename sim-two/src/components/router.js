import React from 'react'; //37E-1
import {Switch, Route} from 'react-router-dom';
import Frontpage from './frontPage/frontpage.js';


export default ( //37E-2
    <Switch>
        <Route path='/' exact component={Frontpage} //frontpage on this line is JSX 36G
        /> 
    </Switch>
)