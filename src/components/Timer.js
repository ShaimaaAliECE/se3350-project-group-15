import { propTypes } from "react-score-indicator";
import React, { useState } from 'react'


export default function Timer(){

    const [time, setTime] =useState(0)
    const [timerOn, setTimeOn]=React.useState(false)

  /*var timer = document.querySelector("#timer");
  var number = 10;

  setInterval(function(){
    number -- ;
    if(number <= 0 )
      number = 0;
    timer.innerText = number + 0 }, 1000);

    const startTimer =()=>{

    }*/

    React.useEffect(()=>{
        let interval=null;
        if(timerOn){
            interval =setInterval(()=>{
                setTime(prevTime=>prevTime+10)
            },10)
        } else{
            clearInterval(interval)
        }

        return ()=> clearInterval(interval)

    },[timerOn])

    return (
        <div className="Timer"> 
            <div>
            <span> {""+ Math.floor((time / 60000) %60)}:</span>
            <span> {""+ Math.floor((time / 1000) %60)}:</span>
            <span> {""+ ((time / 10) %100)} </span>
            </div>
        
        <div> 
            
                 <button onClick={()=> setTimeOn(true)}>Start Timing</button>
                <button onClick={()=>setTimeOn(false)}>Stop Timing</button>
               <button onClick={()=>setTime(0)}>Reset Timer</button>
           
            
        </div>
        </div>
    );
    
}