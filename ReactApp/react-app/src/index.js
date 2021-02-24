// This is the initial file called that start the app. 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//You need to install bpm bootstrap to use this, extended CSS options
import 'bootstrap/dist/css/bootstrap.css';

const element = <h1>Hello World</h1>;
console.log(element); 

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

