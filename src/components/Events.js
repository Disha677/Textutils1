import React, { useState } from 'react'

function Events() {
    //Onchange
    // const [inputValue, setInputValue] = useState('');

    //     function handleChange(event){
    //         setInputValue(event.target.value)
    //     }
    //   return (
    //     <div>
    //           <h1>Enter Your Name</h1>
    //           <input type="text" value={inputValue} onChange={handleChange} />
    //           <p>You entered: {inputValue}</p>
    //     </div>
    // )
  
  
  //Onclick
    // const [count, setCount] = useState(0);

    // function handleClick() {
    //   setCount(count + 1);
    // }
  
    // return (
    //   <div>
    //     <p>You clicked {count} times</p>
    //     <button onClick={handleClick}>
    //       Click me
    //     </button>
    //   </div>
    // );
  
  
   
  //MouseEnter and MouseLeave
  // const [isHovered, setIsHovered] = useState(false);

  // function handleMouseEnter() {
  //   setIsHovered(true);
  // }

  // function handleMouseLeave() {
  //   setIsHovered(false);
  // }
  // return (
  //   <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  //   {isHovered ? "You are hovering over the div" : "Hover over the div"}
  // </div>
  // );

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {isHovered ? "You are hovering over the div" : "Hover over the div"}
  </div>
  );
    
}

export default Events
