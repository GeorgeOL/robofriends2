import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
// registerServiceWorker
// import reportWebVitals from './reportWebVitals';
// import Hello from "./Hello.js";
import 'tachyons';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
    <div>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
         , document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//registerServiceWorker
// reportWebVitals();
