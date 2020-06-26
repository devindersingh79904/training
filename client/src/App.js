import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div class='page-wrapper'>
        <div class='container-fluid'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
