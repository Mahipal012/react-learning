import './App.css'


import UsercontextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
   <UsercontextProvider>
    <h1 className='bg-green-700'>heloo</h1>
    <Login/>
    <Profile/>
   </UsercontextProvider>
  )
}

export default App
