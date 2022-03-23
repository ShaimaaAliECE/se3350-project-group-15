import { useAlert } from "react-alert";
import { useState } from "react";
import useSound from "use-sound";
import correctSound from "../assets/sounds/correct.wav";
import wrongSound from "../assets/sounds/wrong.mp3";
//From Ives Luo

export default function SquareBtnStyleWithInput(props) {
  const alert = useAlert(); //Henry: fancy alert
  const [playCorrectSound, setCorrectSound] = useSound(correctSound);
  const [playWrongSound, setWrongSound] = useSound(wrongSound);
  const [inputColor,setInputColor] = useState('');

  const checkAns = (event) => {
    if (event.target.value === event.target.id) {
      props.setCurrentPoint(props.currentPoint + 1);
      event.target.disabled = true;
      setInputColor('#b9fbc0');
      alert.success("correct");
      playCorrectSound();
    } else if (event.target.value === "") {
    } else {
      event.target.value = "";
      setInputColor('#fe6d73');
      alert.error("wrong answer");
      playWrongSound();
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
      style={{backgroundColor: inputColor}}
    />
  );
}
