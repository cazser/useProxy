import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createProxyForPlainObject from './lib/useProxy/createProxyForPlainObject';

const object = createProxyForPlainObject([0,1,2], ()=>{console.log("triger")})
console.log("*************")
delete object[2]
console.log("*************")
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
