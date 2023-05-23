import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';
//import App from './App.jsx'
import './index.css'
//import { FirstApp } from './FirstApp'
//import { HelloWorldApp } from './HelloWorldApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value = { 0 } />
    {/* <FirstApp title="Hola, Soy MaryoGA" /> */}
  </React.StrictMode>,
)
