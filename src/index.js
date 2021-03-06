import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter } from 'react-router-dom';

// //Arrow Functions
// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }

// //Transpiling using babel(JSX)
// const greeting = <h1> Hello World!  Current Date : {getCurrentDate()}</h1>;


ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
     document.getElementById('root'));
registerServiceWorker();
