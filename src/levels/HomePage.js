import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/css/Background.css"
import actualTime from '../components/Clock.js'

export default function LevelMain() {
    return (
        <div>
            <div className="LevelMain">
                <h1>Welcome My Friend</h1>
                <li>
                    <Link to={"/level1"} className="level1">
                        LVL: Beginner
                    </Link>
                </li>
                <li>
                    <Link to={"/level2"} className="level2">
                        LVL: Normal
                    </Link>
                </li>
                <li>
                    <Link to={"/level3"} className="level3">
                        LVL:  On your Own
                    </Link>
                </li>
            </div>

            <div>
                <div className='clock' >
                    <div className='hours'/>
                    <div className='minutes'/> 
                    <div className='seconds'/>
                </div>
                
            </div>
        </div>

    );
}

