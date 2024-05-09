import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   let [count, setCount] = useState(1)
  
//   const addValue=()=>{

//     if(count===20){
//       console.log("enuf");

//     }else{
//       setCount(count+1)
//     }
    
//   }

//   const removevalue=()=>{
//     if(count!=0){
//       setCount(count-1)
//     }
//   }

//   return (
//     <>

//       <h1>mahi counter</h1>
//       <h5>You increase the value atlest for 20 and discrease for 0</h5>
//       <p>My value is {count}</p>
//       <button
//       onClick={addValue}
//       >increase</button>
//       <br></br>
//       <button
//       onClick={removevalue}
//       >dicrease</button>

//     </>
//   )
// }
// function App(){
  // const[name,setname]=useState("Tata")
  // const[year,setyear]=useState(18)
//   const[name,setname]=useState({
//     brand:"new",
//     year:23,
//     class:"first"
//   })
//   return(

//     <>
//     <h1>my project</h1>
//     <h3>my car is{name.brand} it is {name.year}  yerarold it is {name.class} class</h3>
//     </>

//   )

// }
function Car(props){
  return <h1>MY car name is{props.brand}</h1>
}

function App(){
  const carName="ford";

return(
  <>

  <h2>What is your car name</h2>
  <Car brand={carName}/>
  </>

)

}

export default App
