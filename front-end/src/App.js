import React, {useState} from 'react';
import Calculator from './components/calculator'
import Planner from './components/planner'
import Header from './components/header'
import Home from './components/home'
import './App.css';

function App() {
  const [tab, setTab] = useState("home")

  return (
    <div className="App">
      <Header setTab={setTab} tab={tab} />
      {tab === "calc" ? <Calculator /> : null}
      {tab === "plan" ? <Planner /> : null}
      {tab === "home" ? <Home setTab={setTab} /> : null}
    </div>
  );
}

export default App;
