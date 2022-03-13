import { useAlert } from "react-alert";
//From Ives Luo

export default function SquareBtnStyleWithInput(props) {
  const alert = useAlert(); //Henry: fancy alert

  const checkAns = (event) => {
    if (event.target.value === event.target.id) {
      props.setCurrentPoint(props.currentPoint + 1);
      event.target.disabled = true;
      alert.show("correct");
    } else if (event.target.value === "") {
    } else {
      event.target.value = "";
      alert.error("wrong answer");
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
