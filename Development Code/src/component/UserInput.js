
import React, {useState} from 'react'
import './userInput.css'


//make multiple input boxes in the page of level two, and let the user to input the number base on the instrucions
//connect with the check answer function and the feedback function to show the positive and negative feedback

function UserInput()
{
    const [data, setDate]=useState(null)
    function getData(val){
        setDate(val.target.value)
    }
    

    return (
        <div classNAme="UserInput">

            <div className="UserInput_background">
            <h1>user input here !</h1>
            <input type="text" onChange={getData} />
            <input type="text" onChange={getData} />
            <input type="text" onChange={getData} />
        </div>
        </div>
    )
}


export default UserInput;