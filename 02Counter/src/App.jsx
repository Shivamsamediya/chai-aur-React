import './App.css'
import { useState } from 'react'

function App() {
  const [Counter,setCounter]=useState(15);

  const addValue = ()=>{
    setCounter(prevCounter=>prevCounter+1);
    /*
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
   // Updates UI only after all these fns are executed to initially cnt=15 after onclick cnt=19*/ 
  }

  const removeValue = ()=>{
    setCounter(Counter-1);
  }

  return (
     <>
     <h1>Chai aur React</h1>

     <button onClick={addValue}>
      Add value:{Counter}
     </button>

     <button onClick={removeValue}>
      Remove value:{Counter}
     </button>

     <p> footer:{Counter}</p>
     </>
  )
}

export default App
