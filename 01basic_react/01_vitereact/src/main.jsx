import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Nam from './Name.jsx'

const anotherapp=(
  <a href="https://google.com" target='_blank'>go to google</a>
)

const reactelement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  "got to the google"
)

ReactDOM.createRoot(document.getElementById('root')).render(  


<App/>
  
)
