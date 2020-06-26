import React from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import LeftSideBar from './component/layout/LeftSideBar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LeftSideBar />
    </div>
  );
}

export default App;
