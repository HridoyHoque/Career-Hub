import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='px-5 md:px-26'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;