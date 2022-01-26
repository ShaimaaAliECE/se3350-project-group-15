import "./App.css";
import { SortingComponent } from "./component/sortingComponent";
import Home from "./component/Home";
import Board from "./component/Board";
import Card from "./component/Card";
import ScoreIndicator from "./component/ScoreIndicator";
import CountDown from "./component/CountDown";
import ParallaxComponent from "./component/Parallax";

function App() {
  let onTimesup = () => {
    alert(`Time's up!`);
  };

  return (
    <div>
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
      <div>
        <ParallaxComponent />
      </div>
    </div>
  );
}

export default App;
