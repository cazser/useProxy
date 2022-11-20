import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createProxyForObject from './lib/useProxy/createProxyForObject';


const array = createProxyForObject([[1,2], [3,4]], ()=>{
  console.log("bingle")
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
