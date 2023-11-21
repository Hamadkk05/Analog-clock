import React, { useEffect } from 'react';
import './Analog.css'
import Clock2 from './Analog';
const Clock = () => {
    useEffect(()=>{
        Clock2()
    },[])
    return (
        <div class="container">
        <div class="centernut"></div>   
       <div class="indicator">
        <div></div> 
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
        <div></div>       
       </div>
       
       <div class="sec-hand"></div>
       <div class="min-hand"></div>
       <div class="hour-hand"></div>
       </div>
    );
};
export default Clock;