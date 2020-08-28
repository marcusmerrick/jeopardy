import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";
import Navigation from './Components/Navigation/Navigation'
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact';


function App() {

  return (<div className="App">
    
    <Navigation />
     {/* define our routes */}
     
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
        <Route render= {}
      </Switch>
     
    </div>
    );
}

export default App;
