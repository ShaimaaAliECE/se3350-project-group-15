import { useAlert } from "react-alert";
import { useEffect } from "react";
import "../assets/css/Popup.css";
import { useState } from "react";
import useSound from "use-sound";
import correctSound from "../assets/sounds/correct.wav";
import wrongSound from "../assets/sounds/wrong.mp3";
//From Ives Luo

export let error = 0;
export function errorAlert() {
  alert("You make error 3 times");
}
let currentScore = 0;

export default function SquareBtnStyleWithInput(props) {
  const alert = useAlert(); //Henry: fancy alert
  const [playCorrectSound, setCorrectSound] = useSound(correctSound);
  const [playWrongSound, setWrongSound] = useSound(wrongSound);
  const [inputColor, setInputColor] = useState('');

  const checkAns = (event) => {
    if (event.target.value === event.target.id) {
      props.setCurrentPoint(props.currentPoint + 1);
      currentScore++;
      props.setScore(currentScore);
      event.target.disabled = true;

      setInputColor('#b9fbc0');
      alert.success("correct");
      playCorrectSound();
    } else if (event.target.value === "") {
    } else {
      event.target.value = "";
      error++;


      if (error !== 3) {
        alert.error("wrong answer " + error);
        setInputColor('#fe6d73');
        playWrongSound();
      } else {
        error = 0;
        errorAlert();
        setInputColor('#fe6d73');
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
