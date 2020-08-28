import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Navigation from ''
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact';

function App() {
  return (<div className="App">
     {/* define our routes */}
     <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Eric" />}
        />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />


    Hello
    <Welcome name='Marcus' />
    <Clock />
    <Contact />
    </div>
    );
}

export default App;
