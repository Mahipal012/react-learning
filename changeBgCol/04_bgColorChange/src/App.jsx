import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
     <div className="w-full h-screen duration-500"
     style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mr-4'>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button  onClick={() => setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4'
        style={{backgroundColor:'red'}}
        >red</button>
        <button onClick={()=>setColor('yellow')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4'
        style={{backgroundColor:'yellow'}}
        >yellow</button>
        <button onClick={()=>setColor('green')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4'
        style={{backgroundColor:'green'}}
        >green</button>
        <button onClick={()=>setColor('pink')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4'
        style={{backgroundColor:'pink'}}
        >pink</button>
        </div>
      </div>
     </div>
    
  )
}

export default App
