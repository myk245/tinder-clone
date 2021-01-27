import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; 
import TinderCard from './Components/TinderCard'; 
import ButtonsBar from './Components/ButtonsBar';
import Chat from './Components/Chat'; 
import Profile from './Components/Profile'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path='/' component={TinderCard} />
          <Route path='/chat' component={Chat} />
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
      <ButtonsBar />
      {/* Buttons below Tinder cards */}

      {/* Chat screen */}
      {/* Individual chats */}
    </div>
  );
}

export default App;
