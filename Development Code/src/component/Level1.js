import React from "react";
import Board from "./Board";
import Card from "./Card";
import ScoreIndicator from "./ScoreIndicator";
import CountDown from "./CountDown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./Level1.css";

function Level1() {
  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  let onTimesup = () => {
    // alert(`Time's up!`);
  };

  return (
    <div>
      <div className="container">
        <p className="draggable" draggable="true">
          1
        </p>
        <p className="draggable" draggable="true">
          2
        </p>
      </div>
      <div className="container">
        <p className="draggable" draggable="true">
          3
        </p>
        <p className="draggable" draggable="true">
          4
        </p>
      </div>

      <div className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>
      </div>
      <ScoreIndicator />
      <CountDown className="count_down" onTimesup={onTimesup} duration={5} />
    </div>
  );
}

export default Level1;
