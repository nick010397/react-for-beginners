import React from 'react';
import { useState } from "react";


function Practice() {

  const [counter, setCounter] = useState(0);
  const onClick = () => {
    // counter = counter +1;
    // setCounter(counter+1);
    setCounter((current) => current +1);
    
  }
    return(
        <div>
        <h3>Total clicks:{counter}</h3>
        <button onClick={onClick}>Click me</button>
        </div>
        
      
      
    

        
        
    )
}









export default Practice;