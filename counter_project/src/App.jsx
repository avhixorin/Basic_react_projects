import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(20);


  const addValue = () => {
    setCounter(++counter)
  }

  const removeValue = () => {
    if(counter > 0) setCounter(--counter)
   
  }
  return (
    <>
      <h1>My Project</h1>
      <h2>Count Value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
