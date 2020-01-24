import React from 'react';
import { HashRouter } from 'react-router-dom';

/* Stylesheets */
import './App.css';

/* Components */
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div>
      <HashRouter>
        <Dashboard/>
      </HashRouter>
    </div>
  );
}

export default App;
