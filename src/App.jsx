import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
function Mydata(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  )
}
function App() {
    return (
    <>
      <Mydata name="Jayanthi" age="30" />
    </>
  )
}

export default App
