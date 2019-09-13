import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComponent from './NavBar/NavBarComponent';
import BreedListComponent from './Breeds/BreedListComponent';
import SingleBreedComponent from './Breeds/SingleBreedComponent';
import MainComponent from './Home/MainComponent';
import FooterComponent from './Footer/FooterComponent';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBarComponent></NavBarComponent>
        <div className="content">
          <Switch>

            <Route path="/breeds" component={BreedListComponent} exact />
            <Route path="/breeds/:id" component={SingleBreedComponent} exact />
            <Route path="/" component={MainComponent} exact />
        
          </Switch>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </Router>
  );
}

export default App;
