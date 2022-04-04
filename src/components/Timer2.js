import React, { useState } from 'react'

export default function Timer2 () {
    
    //var t =prompt("How many time do you need?");
    const startingMinutes=1;
    let time=startingMinutes*60;
    const countdownEl= document.getElementById('countdown');
    
    setInterval(timerStart,1000);
   

    function timerStart(){
    


        const minutes= Math.floor(time/60);
        let seconds=time%60;
        countdownEl.innerHTML=`${minutes}:${seconds}`;
        time--;



    }

    return(
        
        <div className='countdownTimer'>
            
            <div>There are <span id="countdown">01:00</span> minutes left!</div>


        </div>


        
    )

}

