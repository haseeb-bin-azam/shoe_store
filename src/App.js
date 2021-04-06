import React from 'react';
import { TransactionProvider } from './context/GlobalState';

import { Header } from './components/Header';
import { Section } from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <TransactionProvider>
        <Router>
          <Header />
          <Section />
        </Router>
      </TransactionProvider>
    </div>
  );
}

export default App;