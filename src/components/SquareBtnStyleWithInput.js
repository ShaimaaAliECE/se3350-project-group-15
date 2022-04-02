import { useAlert } from "react-alert";
import React, { useEffect } from "react";
import "../assets/css/Popup.css";
import { useState } from "react";
import useSound from "use-sound";
import correctSound from "../assets/sounds/correct.wav";
import wrongSound from "../assets/sounds/wrong.mp3";
import Popup from "./Popup";
import {useModal} from "react-modal-hook";
import ReactModal from "react-modal";
import './conformModalStyle.css'
//From Ives Luo
export let error = 0;
export function errorAlert() {
  alert("You make error 3 times!!");
}

//testing popup ----currently cannot be used
export function popWindow() {
  //run everytime there is an error
  //<Popup> cannot show because this is for the every input!
  console.log("popup function");
  return (
    <div>
      {/* <Popup/> */}
      hiii
    </div>
  );
}

let currentScore = 0;
export default function SquareBtnStyleWithInput(props) {
  const alert = useAlert(); //Henry: fancy alert
  const [playCorrectSound, setCorrectSound] = useSound(correctSound);
  const [playWrongSound, setWrongSound] = useSound(wrongSound);
  const [inputColor, setInputColor] = useState("");
  const [showPopup, setPopup] = useState(false);
  const {showModal} = props || {}


  const checkAns = (event) => {
    if (event.target.value === event.target.id) {
      props.setCurrentPoint(props.currentPoint + 1);
      currentScore++;



      event.target.disabled = true;
      setInputColor("#b9fbc0");
      alert.success("correct");
      playCorrectSound();
    } else if (event.target.value === "") {
    } else {
      event.target.value = "";
      error++;
      props.setCurrentError(props.currentError+1);

      popWindow();//this is currently not working
      if (error !== 3) {
        alert.error("wrong answer " + error);
        setInputColor("#fe6d73");
        playWrongSound();
      } else {
        error = 0;
        showModal()
        // errorAlert();
        // alert.show('Oh look, an alert!')
        // popWindow();
        // setInputColor("#fe6d73");
        playWrongSound();
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
      style={{ backgroundColor: inputColor }}
    />
  );
}
