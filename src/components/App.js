import React from 'react';
import './App.css';
import Header from "./Header.js"
import Feed from './Feed.js';
import Info from './Info.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Feed />
    </React.Fragment>
  );
}

export default App;
