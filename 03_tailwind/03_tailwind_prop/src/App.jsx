import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj={
    name:"mahijat",
    age:23,
  }
  return (
    <>

      <h1 className='bg-yellow-500 text-emerald-600'>heading</h1>
      <img className="h-80 min-h-40 max-h-56 pt-4 pb-4" src='https://th.bing.com/th/id/R.8c132eaf8894aa93481d087ce02f0450?rik=YCeCpR4bAmBPxQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1744100.jpg&ehk=L5KLqkuUdoAhruSmSs1Xj05w7GPUOPhUSHkD06F0qEY%3d&risl=&pid=ImgRaw&r=0'/>
      <Card username={obj} btn="click"/>
      <Card username="chodhary"/>

    </>
  )
}

export default App
