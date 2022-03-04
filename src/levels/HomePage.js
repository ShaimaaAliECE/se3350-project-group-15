import React from "react";
import { Link } from "react-router-dom";

export default function LevelMain() {
    return (
        <div className="LevelMain">
            <h1>LevelMain</h1>
            <Link to={"/level1"} className="level1">
                Level1
            </Link>
            <Link to={"/level2"} className="level2">
                Level2
            </Link>
            <Link to={"/level3"} className="level3">
                Level3
            </Link>

        </div>
    );
}

