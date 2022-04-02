import React from "react";
import "../assets/css/Popup.css";
function Popup(props) {

  return  (props.trigger)? (
    <div className="popup">
      <div className="popup-inner">
        This is a popup Window :)
        <button className="close-btn" onClick={()=>props.setTrigger(false)}></button>
        {props.children}

      </div>
    </div>
  ):"";
  
}

export default Popup;
