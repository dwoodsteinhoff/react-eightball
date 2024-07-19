import React from "react"
import Eightball from './Eightball.js'
import Answers from './Answers.js'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className="App-title">Magic Eightball</h1>
        <Eightball Answers={Answers}/>
    </div>
  )
}

export default App;
