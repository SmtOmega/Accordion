import React, {useState} from 'react'
import './App.css';
import questions from './data'
import Accordions from './Accordions'
function App() {
  const [question, setQuestion] = useState(questions)
  return (
    <div className="App">
      <Accordions questions ={questions}/>
    </div>
  );
}

export default App;
