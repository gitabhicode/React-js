import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let[counter, setCounter] = useState(15)

  const addValue = () =>{
    // console.log("clicked" , Math.random());
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);  // is case me bunch me cheeze jaati hai so increment 1 hi baar hoga

      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1);  // is case me hum prevCounetr le rhe hian so value directly update hoke 15 se 19 ho jayegi
  }

  const removeValue = () =>{
    console.log("clicked", Math.random());
    counter = counter-1
    setCounter(counter);
  }
  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter} </button>
    </>
  )
}

export default App
