import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Level1 from "./component/Level1";
import Level2 from "./component/Level2";
import Dropdown from 'react-bootstrap/Dropdown'
import ParallaxComponent from "./component/ParallaxComponent";


function App() {
 

  return (
  <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Level
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/Level1">Level1</Dropdown.Item>
          <Dropdown.Item href="/Level2">Level2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Level1 /> */}
      {/* <ParallaxComponent /> */}


      <Routes>
        <Route path="/Level1" element={<Level1 />} />
        <Route path="/Level2" element={<Level2 />} />
      </Routes>
    </div>
  );
}

export default App;
