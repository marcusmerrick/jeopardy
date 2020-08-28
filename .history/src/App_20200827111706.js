import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";
import Navigation from './Components/Navigation/Navigation'
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact';
import getTodo from './Services/todoService'
import Jeopardy from "./Components/jeopardy/Jeopardy";
getTodo(1)



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
        <Route path="/contact" component={Jeopardy} />
        <Route render= {
          () => <h1>404 Not Found</h1>
        } />
      </Switch>
     
    </div>
    );
}

export default App;