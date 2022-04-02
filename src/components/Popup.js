import React from "react";
import "../assets/css/Popup.css";
function Popup(props) {

//   return props.trigger ? (
//     <div className="popup">
//       <div className="popup-inner">
//         hi
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
  
// }

  return  (props.trigger)? (
    <div className="popup">
      <div className="popup-inner">
        hi
        {props.children}
      </div>
    </div>
  ):"";
  
}

export default Popup;
