import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const {setuser}=useContext(UserContext)
    const [username, setusername]=useState('')
    const [password, setpassword]=useState('')
    const handler=(e)=>{
        e.preventDefault()
        setuser({username, password})

    }
    return(
        <div>
            <h1>Login</h1>
            <input className="bg-pink h-20 w-30 p-4"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            type="text" placeholder="username"/>

            <input 
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            type="text" placeholder="password"/>

            <button onClick={handler}>submit</button>
        </div>
    )
}

export default Login;