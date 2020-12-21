import React from "react";
import ReactDOM from 'react-dom';

// cosnt arr = ['piyush','ayush','anuj']
// In React v16 it's possible for render()
// to return an array of elements.
ReactDOM.render([
    <h1>Piyush</h1>,
    <p>Hello how are you</p>,
    <h2>I am fine.</h2>
],
document.getElementById("root"));