// JavaScript Expressions in JSX in ReactJS

// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "Piyush";
// const lname = "Chaturvedi"


// ReactDOM.render(
//     <>
//     <h1>My name is {fname + " " +lname}</h1>
//     <p> my lucky number is {5+5}</p>
//     </>,
//     document.getElementById("root")
// )

// ES6 Template Literals in JSX
import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Piyush";
const lname = "Chaturvedi"

console.log(`"my name is ${fname}"`)
ReactDOM.render(
    <>
        <h1>My name is {`${fname} ${lname}`}</h1>
        <p> my lucky number is {5 + 5}</p>
    </>,
    document.getElementById("root")
)