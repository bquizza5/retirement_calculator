import React, {useState} from 'react';
import Calculator from './components/calculator'
import Planner from './components/planner'
import Home from './components/home'
import './App.css';

function App() {
  const [tab, setTab] = useState("home")

  return (
    <div className="App">
      <button onClick={()=>{setTab('calc')}}>calculator</button>
      <button onClick={()=>{setTab('plan')}}>planner</button>
      <h1>Retirement Calculator</h1>
      {tab === "calc" ? <Calculator /> : null}
      {tab === "plan" ? <Planner /> : null}
      {tab === "home" ? <Home setTab={setTab} /> : null}
    </div>
  );
}

export default App;
