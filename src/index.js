var React = require('react');
var ReactDOM = require('react-dom');
import App from './App';
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));
//  need to import react is react must be in scope when using jsx 
// reactdom is used to render the arguments 
// babel coverts ES6 to vanilla javascript 

// writing in pure javascript 
// var h1 = document.createElement("h1")cd;
// h1.innerHTML = "Hello";
// document.getElementById("root").appendChild(h1);

// if you want to add multiple jsx you need to wrap them inside enclosing tag 
// ReactDOM.render(
//   <div>
//     <h2>Hello React</h2>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.Fragment>
//     <h2>Hello React</h2>
//       {/* <p></p> */}
//   </React.Fragment>,
//   document.getElementById("root")
// )
// react fragment is used to remove the div element because when we are using div it creates div,so that when we style the css we can easily use flex,grid properties 

// // babel is a javascript compiler which compiles ES6 in such a way that chrome can understand the code. 
// // inside rebder method we need to pass three arguments which is what to show(remember this is not your html this is your JSX which is javascript extension),where to show and a callback function.  























// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


