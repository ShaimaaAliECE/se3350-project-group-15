import React, {Component} from 'react'
//import React from 'react'

const GameDuration= 1000*60;
const getTimeLeft= deadline=> deadline - Date.now();

const GAME_STATE = {
    READY: 'ready',
    PLAYING: 'playing',
    DONE: 'done',
  };

  
  
const initalState={
    gameStart: GAME_STATE.READY,
    timeLeft:0,  
    }
    

class Timer extends React.Component{
    state=initalState;
    startGame=()=>{
        this.currentDeadline=Date.now ()+GameDuration;

        this.setState(
            {
              gameState: GAME_STATE.PLAYING,
              timeLeft: getTimeLeft(this.currentDeadline),
            },
            this.gameLoop
          );
          this.timer = setInterval(() => {
            const timeLeft = getTimeLeft(this.currentDeadline);
            const isTimeout = timeLeft <= 0;
            if (isTimeout && this.timer) {
              clearInterval(this.timer);
            }
      
            this.setState({
              timeLeft: isTimeout ? 0 : timeLeft,
              ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
            });
          }, 1000);


    };

    gameLoop=()=>{


    }
    


    render(){

    
    return(
       <div>
           <h1>Timer Count</h1>
       </div>
    );
    
}


}




export default Timer