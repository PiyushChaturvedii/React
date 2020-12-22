// JSX Challenge
// 1. Create a react app from scratch
// 2. Add one h1 element Your Name
// 3. Add one p element in it with Current Date
// 4. Add one p element in it with Current Time

import React from 'react';
import ReactDOM from 'react-dom';

const name = "Piyush";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
    <>
        <h1> Hello, My name is {name}</h1>
        {/* <p> Current Date is = {currDate}</p> */}
        {/* <p> Current Date is = {currTime}</p> */}
    
    </>,
    document.getElementById("root")
);

// HTML Attribute Vs JSX Attribute