import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createProxyForObject from './lib/useProxy/createProxyForObject';


const object = createProxyForObject({a:{b:{c:1}}}, ()=>{
  console.log("aaaa")
})

object.a.b.c = 12;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
