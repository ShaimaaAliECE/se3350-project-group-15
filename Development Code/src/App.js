import React from "react";
import "./App.css";
import HeaderLogin from "./HeaderLogin";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";

function App() {
  return (
    <div className="App">
      <HeaderLogin />
      <HeaderLevel />
      <BottomInstructions />
    </div>
  );
}

export default App;
