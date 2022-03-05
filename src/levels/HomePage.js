import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
export default function LevelMain() {
    return (
        <div className="LevelMain">
      
            <div id="One">
                <Link to={"/level1"} className="level1">
                    Level1
                </Link>
            </div>
            <div id="Two">
                <Link to={"/level2"} className="level2">
                    Level2
                </Link>
            </div>
            <div id="Three">
                <Link to={"/level3"} className="level3">
                    Level3
                </Link>
            </div>
        </div>
    );
}

