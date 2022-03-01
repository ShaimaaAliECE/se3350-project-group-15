import React, { Component } from 'react'
//import React from 'react'

/*const GameDuration= 1000*60;
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
*/

export default class Timer extends React.Component {
    /* state=initalState;
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
     */

    constructor(props) {
        super(props)
        this.state = {
            count: 0
            //count:100 for count down
        }
    }

    timerIncrement() {
        this.setState({
            count: this.state.count + 1   //both work
            //count:prevState.count+1
            //count:this.state.count-1 for count down
        })
    }

    //set and clear interval
    timerStart(timer) {
        //this.doIntervalChange()
        setInterval(timer, 1000)

    }

    /*doIntervalChange=()=>{
        this.myInterval=setInterval(()=>{
            this.setState(prevSate=> ({
                count: prevSate.count+1
            }))
        },1000)
        
    }*/
    render() {
        return (
            <div>
                <h1>Timer Count: {this.state.count} </h1>
                <button onClick={this.timerStart(this.timerIncrement)}>Start Timer Counting</button>
            </div>
        );

    }


}