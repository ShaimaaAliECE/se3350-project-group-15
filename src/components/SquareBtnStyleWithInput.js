import { useAlert } from "react-alert";
import { useEffect } from "react";
import "./Popup.css";


import { Link } from "react-router-dom";
//From Ives Luo
export let error = 0;
export function errorAlert(){
  alert("You make error 3 times");
}
export default function SquareBtnStyleWithInput(props) {
  const alert = useAlert(); //Henry: fancy alert

  const checkAns = (event) => {
    if (event.target.value === event.target.id) {
      props.setCurrentPoint(props.currentPoint + 1);
      event.target.disabled = true;
      alert.success("correct");
    } else if (event.target.value === "") {
    } else {
      event.target.value = "";
      error++;

      if (error !== 3) {
        alert.error("wrong answer " + error);
      } else {
        error = 0;
        errorAlert();
      }

      // props.currentError(error);
    }
  };

  return (
    <input
      className={
        props.opacity
          ? "square-container-opacity text-box"
          : "square-container text-box"
      }
      type="text"
      id={props.id}
      name="ansBox"
      onBlur={checkAns}
    />
  );
}
