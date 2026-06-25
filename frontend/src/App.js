import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AccountDashboard from './components/ComponentName';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '1rem' }}>
      <header style={{ marginBottom: '1rem' }}>
        <h1>Utkrusht Skill Wallet</h1>
        <nav>
          <Link to="/">Dashboard</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<AccountDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
