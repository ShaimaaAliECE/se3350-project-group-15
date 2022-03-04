import React from "react";
import { Link } from "react-router-dom";

export default function LevelMain() {
    return (
        <div className="LevelMain">
            <h1>LevelMain</h1>
            <li>
                <Link to={"/level1"} className="level1">
                    Level1
                </Link>
            </li>
            <li>
                <Link to={"/level2"} className="level2">
                    Level2
                </Link>
            </li>
            <li>
                <Link to={"/level3"} className="level3">
                    Level3
                </Link>
            </li>
        </div>
    );
}

