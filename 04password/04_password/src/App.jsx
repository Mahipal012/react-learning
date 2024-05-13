import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
  const [number, setnumber]=useState(false)
  const [char, setchar]=useState(false)
  const[password,setpassword]=useState("")
  const [lenght, setlenght]=useState(6)
  
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(char) str += "!@#$%^&*-_+=[]{}~"
    for(let i=1; i<=lenght; i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[number,char,lenght,setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 12);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  },[lenght,char,number,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={50}
          value={lenght}
          className='cursor-pointer'
          
          onChange={(e)=>setlenght(e.target.value)}
          />
          <p>Lenght:{lenght}</p>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          id='number'
          defaultChecked={number}
          onChange={()=>{
            setnumber((prev)=>!prev)
          }}
          />
          <p>number</p>
        </div>
        <div className='flex items-center gap-x-1'
        >
          <input 
          type='checkbox'
          id='char'
          defaultChecked={char}
          onChange={()=>{
            setchar((prev)=>!prev)
          }}
          
          />
         <p>charcter</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default App