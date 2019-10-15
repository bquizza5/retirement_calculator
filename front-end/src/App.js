import React from 'react';
import Retirement from './components/calculator'
import Planner from './components/planner'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Retirement Calculator</h1>
      <Retirement />
      <Planner />
    </div>
  );
}

export default App;
