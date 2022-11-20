import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import createProxyForPlainObject from './lib/useProxy/createProxyForPlainObject';

const object = createProxyForPlainObject({a:1, b:2}, ()=>{console.log("triger")})
object.a=5;
console.log(object);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
