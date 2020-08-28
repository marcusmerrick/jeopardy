import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import "./App.css";
import Navigation from './Components/Navigation/Navigation'
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact';

function App() {
  return (<div className="App">

    <Navigation />
     {/* define our routes */}
     let routes 
     <Switch>
      <Route
          exact
          
          path="/Welcome/:name"
          render={(props) => <Welcome {...props} />}
      />
        <Route 
        exact path='/'
        render={(props) => <Welcome {...props} name="Marcus" />}
      />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
    );
}

export default App;
