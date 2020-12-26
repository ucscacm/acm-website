import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div class="app-container">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
      <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'></link>
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
      <Home />
    </div>
  );
}

export default App;
