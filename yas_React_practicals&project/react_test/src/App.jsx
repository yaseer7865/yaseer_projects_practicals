import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q1 from './component/Q1'
import Q2 from './component/Q2'
import Q3 from './component/Q3'
import Q4 from './component/Q4'
import Q5 from './component/Q5'
import Q7 from './component/Q7'
import Q8 from './component/Q8'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Q1 />1
     <br />
     <Q2/>2
     <br />
     <Q3/>3
     <br />
     <Q4/>4
     <br />
     <Q5/> 5
      <br />
      <Q7/>7
      <br />
      <Q8/> 8

      
    </>
  )
}

export default App
