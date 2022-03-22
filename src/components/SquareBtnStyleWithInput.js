import { useAlert } from "react-alert";
import { useEffect } from "react";
//From Ives Luo
export let error = 0;
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
      props.currentError(error);
      alert.error("wrong answer " + error);
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

