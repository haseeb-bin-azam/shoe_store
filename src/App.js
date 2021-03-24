import React from 'react';

import { Header } from './components/Header';
import { Section } from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Section />
      </Router>
    </div>
  );
}

export default App;