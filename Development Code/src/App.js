import React, { useState, useEffect } from "react";
import "./App.css";
import HeaderLogin from "./component/HeaderLogin";

// import HeaderLevel from "./component/HeaderLevel";
// import BottomInstructions from "./component/BottomInstructions";
import Level1 from "./component/Level1";
import Level2 from "./component/Level2";
import Level3 from "./component/Level3";
import LevelMain from "./component/LevelMain";
import { Routes, Route, Navigate } from "react-router-dom";

import mergeSort from "./algorithm/MS";





function App() {
  
  

  return (
    <div className="App">
      <HeaderLogin />
      {/* <HeaderLevel />
      <BottomInstructions /> */}
      
    
      

      <Routes>
        <Route path="/" element={<LevelMain />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
      </Routes>
    </div>
  );
}




export default App;
