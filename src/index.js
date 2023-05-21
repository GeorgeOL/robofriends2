import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
// registerServiceWorker
// import reportWebVitals from './reportWebVitals';
// import Hello from "./Hello.js";
import 'tachyons';
import { robot } from "./robot";
import { createRoot } from 'react-dom/client';
// import { render } from 'react-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <div>
//         <Card id={robot[0].id} name={robot[0].name} email={robot[0].email} />
//         <Card id={robot[1].id} name={robot[1].name} email={robot[1].email} />
//         <Card id={robot[2].id} name={robot[2].name} email={robot[2].email} />
//         <Card id={robot[3].id} name={robot[3].name} email={robot[3].email} />
//     </div>
//          , document.getElementById('root'))
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //registerServiceWorker
// // reportWebVitals();

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <Card id={robot[0].id} name={robot[0].name} email={robot[0].email} />
        <Card id={robot[1].id} name={robot[1].name} email={robot[1].email} />
        <Card id={robot[2].id} name={robot[2].name} email={robot[2].email} />
        <Card id={robot[3].id} name={robot[3].name} email={robot[3].email} />
    </div>
);