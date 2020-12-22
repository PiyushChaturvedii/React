import React from 'react';
import ReactDOM from 'react-dom';

const name = "Piyush";


ReactDOM.render(
    <>
        <h1 contentEditable="true"> Hello, My name is {name}</h1>,
        <img src= "https://picsum.photos/200/300" alt="randomImages" />
    </>,
        document.getElementById("root")
);
