import React, {useState} from 'react';
import Calculator from './components/calculator'
import Planner from './components/planner'
import './App.css';

function App() {
  const [tab, setTab] = useState("calc")

  return (
    <div className="App">
      <button onClick={()=>{setTab('calc')}}>calculator</button>
      <button onClick={()=>{setTab('plan')}}>planner</button>
      <h1>Retirement Calculator</h1>
      {tab === "calc" ? <Calculator /> : <Planner />}
    </div>
  );
}

export default App;
