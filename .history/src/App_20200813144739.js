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
          
         
          render={(props) => <Welcome {...props} name="Marcus" />}
        />
        <Route 

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />

    </div>
    );
}

export default App;
