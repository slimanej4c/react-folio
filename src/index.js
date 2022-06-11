import React from 'react';
import {createRoot} from 'react-dom/client';
import {Route , BrowserRouter ,Routes ,useLocation} from "react-router-dom"
import App from './App';

const root=createRoot(  document.getElementById('root'))
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,

  
  
  );

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

