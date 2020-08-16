import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
            <Sidebar />

            <Switch>
               
            </Switch>
        </div>
        {/* React-Router -> Chat screen */}
      </Router>
    </div>
  );
}

export default App;
