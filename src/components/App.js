import React from 'react';
import './App.css';
import Header from "./Header.js"
import Feed from './Feed.js';
import Info from './Info.js';
import Profile from './Profile.js';
import Friends from './Friends.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Feed />
      <Profile />
      <Info />
      <Friends />
    </React.Fragment>
  );
}

export default App;
