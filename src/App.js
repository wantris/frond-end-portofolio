import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import Sidebar from './components/Sidebar';
// import Profile from './components/Profile';
import Content from './components/Content';


function App() {
    

    return (
      <div>
        <Sidebar/>
        <Content/>
      </div>
    );
  }

export default App;
