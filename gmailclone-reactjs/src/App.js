import React from 'react'
import Header from './component/layout/Header.js';
import Main from './component/layout/Main.js';
import Sidebar from './component/layout/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Sidebar/>
    </div>
   
   
  )
}

export default App
