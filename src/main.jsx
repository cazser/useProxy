import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import isPlainObject from './lib/useProxy/isPlainObject'
console.log(isPlainObject(1));//false
console.log(isPlainObject([1,2,3]))//true
console.log(isPlainObject([[1,3]]))//false
console.log(isPlainObject({name:"Tom", score:[100, 90, 80]}))//false
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
