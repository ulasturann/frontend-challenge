import React, { useRef, useState } from 'react';
import Content from './components/Dashboard';
import Sidebar from './components/SidebarComponent';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div
      className="min-h-screen flex relative lg:static surface-50 filter"
      style={{ fontFamily: 'Inter' }}
    >
      <Sidebar />
      <div className={'min-h-screen flex flex-column relative flex-auto'}>
        <Toolbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
