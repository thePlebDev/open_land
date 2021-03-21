import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Home from '../Home';
import Header from '../Header'



const App =()=>{
  return(
    <div>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home} />

    </Switch>
    </div>
  )
}

export default App
