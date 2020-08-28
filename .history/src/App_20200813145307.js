import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Navigation from './Components/Navigation/Navigation'
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact';

function App() {
  return (<div className="App">

    <Navigation />
     {/* define our routes */}
     <Route
          exact
          
          path="/Welcome/:any"
          render={(props) => <Welcome {...props} name="Marcus" />}
      />
      <Route 
        exact path='/'
        component={<Welcome />}
      />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />

    </div>
    );
}

export default App;
