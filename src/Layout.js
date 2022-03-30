import React,{useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import {Modal} from 'react-modal'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./levels/HomePage";
import {Alert} from 'react-alert'
import { logOut } from './Authentication/firebase';

//Modal.setAppElemeent('#root')

function Layout(){
    //const [isLoggedIn,setIsLoggedIn]=useState(true)
    const [ModalIsOpen, setModalIsOpen]=useState(false)
    const idleTimeRef= useRef(null)
    const sessionTimeoutRef=useRef(null)


    const onIdle=()=>{
        console.log("Is idle now ")
        setModalIsOpen(true)
        //alert("it is timeout")

        sessionTimeoutRef.current=setTimeout(logOut,5000)
        if(window.confirm('5 minutes time out')){
            window.location.href='http://localhost:3000'
            console.log('window confirm')

        };
        

        
    }
    return(
        <div>
            

            <IdleTimer  
            ref={idleTimeRef} 
            timeout={5*1000*60} 
            onIdle={onIdle}

            ></IdleTimer>



        </div>
    )
}

export default Layout









/*import React from 'react'
import {Routes, Route} from 'react-router-dom'
import IdleTimer from 'react-idle-timer'
import {DashboardPage} from './levels/Dashboard'

import { PropTypes } from 'prop-types'
import './App.css'
import { Dashboard } from '@mui/icons-material'
//import { ThirtyFpsSelect } from '@mui/icons-material'

class Layout extends React.Component{

    constructor(props)
{
    super(props)

    this.state={
        timeout:1000, //5second
        isTimeOut: false
    
    }

    this.idleTimer=null;
    this.onAction=this._onAction.bind(this)
    this.onActive=this._onActive.bind(this)
    this.onIdle=this._onIdle.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.handleLogout=this.handleLogout.bind(this)
}
_onAction(e){
    console.log("on action status")
    this.setState({isTimeOut:false})
}

_onActive(e){
    console.log("on active status")
    this.setState({isTimeOut:false})
}

_onIdle(e){
    console.log("on idle")
    const isTimeOut= this.state.isTimeout
    if(isTimeOut){
        console.log("timeout")
    }
    else{
        this.idleTimer.reset();
        this.setState({isTimeOut:true})

    }

}

render(){
    const {match}=this.props

    return(

        <div>
        <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            element={document}
            onActive={this.onActive}
            onIdle={this.onIdle}
            onAction={this.onAction}
            debounce={250}
            timeout={this.state.timeout} />


             <div className="App">    
                
                <Switch>
                    <Route 
                        exact path={"`${match.path}dashboard`"}
                        render={(props) => <DashboardPage {...props} /> }/>

              </Switch>
                
                </div>
        </div>
    )
}

}

Layout.propTypes = {
    match: PropTypes.any.isRequired,
    history: PropTypes.func.isRequired
}

export default Layout
*/