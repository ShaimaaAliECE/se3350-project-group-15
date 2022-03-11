import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Background.css';
import actualTime from '../Helper/Clock.js';

export default function LevelMain() {

    React.useEffect(() => {
        // Update the document title using the browser API
        let element = document.getElementsByClassName('clock')[0].children;
        actualTime(element)
    });

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

            <div className="position-absolute top-50 start-50 translate-middle w-auto h-auto">
                <article class="clock">
                    <div class="hours-container">
                        <div class="hours"></div>
                    </div>
                    <div class="minutes-container">
                        <div class="minutes"></div>
                    </div>
                    <div class="seconds-container">
                        <div class="seconds"></div>
                    </div>
                </article>
            </div>
        </div>

    );
}

