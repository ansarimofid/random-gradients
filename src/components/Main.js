/**
 * Created by ansarimofid on 20/07/17.
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Collection from './Collection/Collection'
import About from './About/About'

const Main  = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/collection' component={Collection}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

export default Main