import React, { useState } from 'react';



function MinutesToHours(){
    const [amount, setAmount] = useState();
    const [inverted, setInverted] = useState(false);


    const onChange = (event) => {
        setAmount(event.target.value);
    }
    
    const reset = () => setAmount(0);
    const onInvert = () => {                 //단위변환
        reset();
        setInverted(!inverted);
    }


    return(
        <>
            
            <label htmlFor="minutes">Minutes</label>
            <input value={inverted ? amount * 60 : amount} onChange={onChange} 
            disabled={inverted ===true} id='minutes' placeholder='Minutes' type='number'></input>  
            {/* <h4>hi{amount}</h4> */}
           
            <label htmlFor="hours">Hours</label>
            <input value={inverted ? amount :Math.round(amount / 60)} onChange={onChange} 
            disabled={inverted ===false} id='hours' placeholder='Hours' type='number'></input>
           
           <button onClick={reset}>Reset</button>
           <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
        </>
       

       
        
       
        
    )

}












export default MinutesToHours;