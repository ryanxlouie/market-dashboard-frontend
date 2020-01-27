import React from 'react';
import { HashRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

/* Stylesheets */
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

/* Components */
import Dashboard from './containers/Dashboard';

toast.configure({
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  newestOnTop: true,
});

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
