import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div class="app-container">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
