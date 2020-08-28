import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clocks/Clock';
import Contact from './Components/Contact/Contact'

function App() {
  return (<div className="App">
    Hello
    <Welcome name='Marcus' />
    <Clock />
    <Contact />
    </div>
    );
}

export default App;
