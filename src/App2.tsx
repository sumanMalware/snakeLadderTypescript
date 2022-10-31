import React, { useState } from "react";
import "./App2.css";
import diceimg from "./dice.png";
import snakeladder from "./snakeandladder.png";
import ladder from "./ladder.png";
import snakegif from "./snakeGif.gif";

const App2 = () => {
  function refreshPage() {
    window.location.reload();
  }

  // interface SnakeladderInput{
  //   props:number
  // }

  const [p1position, setP1position] = useState<number>(1);
  const [p2position, setP2position] = useState<number>(1);
  const [dice, setdice] = useState<number>(0)
  function SnakeLadder(props:number) {
    return <h1>{props}</h1>;
  }

  let snakes = [23, 34, 52, 80, 99];
  let ladders = [10, 21, 35, 67, 77];
  let toLadders = [33, 42, 56, 89, 98];
  let toSnakes = [2, 15, 31, 58, 76];

  function classAssign(num:number) {
    // let r = num.currentTarget.className

    if (snakes.includes(num)) {
      return "";
    } else if (ladders.includes(num)) {
      return "";
    } else {
      return 'rgb(37, 126, 126)';
    }
  }


  let numberArr :any = [];
  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > i - 10; j--) {
        numberArr.push(j);
      }
    } else {
      for (let j = i - 9; j <= i; j++) {
        numberArr.push(j);
      }
    }
  }

  const [turn, setturn] = useState("Start Game");
  const PlayerTurn = () => {
    setturn("Player 1 Turn");

    let player = turn;

    if (player === "Player 1 Turn") {
      setturn("Player 2 Turn");
    }
  };

  let randomNumber = Math.ceil(Math.random() * 6)
  
  const diceNumber = () => {
    
    
    PlayerTurn();
    if (turn === "Player 1 Turn") {
      setdice(randomNumber)
      
      if (snakes.includes(p1position)) {
        let index = snakes.indexOf(p1position);
        setP1position(toSnakes[index]);
      } else if (ladders.includes(p1position)) {
        let index = ladders.indexOf(p1position);
        setP1position(toLadders[index]);
      } else {
        if (p1position + randomNumber === 100) {
          alert("Player : 1 won");
          refreshPage();
        } else if (p1position + randomNumber > 100) {
          setP1position(p1position);
        } else {
          setP1position(randomNumber + p1position)
        }
      }

    } else if (turn === "Player 2 Turn") {
      setdice(randomNumber)

      if (snakes.includes(p2position)) {
        let index = snakes.indexOf(p2position);
        setP2position(toSnakes[index]);
      } else if (ladders.includes(p2position)) {
        let index = ladders.indexOf(p2position);
        setP2position(toLadders[index]);
      } else {
        if (p2position + randomNumber === 100) {
          alert("Player : 2 won");
          refreshPage();
        } else if (p2position + randomNumber > 100) {
          setP2position(p2position);
        } else {
          setP2position(randomNumber + p2position)
        }
      }
    }
  }

  function Position(e : number){
   
    // p1position.toString() === value.toString() ? 'white' : 'blue'
    if (p1position.toString() !== p2position.toString()) {
      if (e.toString() === p1position.toString()) {
        return "orange";
      } else if (e.toString() === p2position.toString()) {
        return "black";
      } else {
        return classAssign(e);
      }
    } else if (
      e.toString() === p1position.toString() &&
      e.toString() === p2position.toString()
    ) {
      return "linear-gradient(90deg,black 50%,orange 50%)";
    } else {
      return classAssign(e);
    }
  }
  return (
    <div id="main">
      <img src={ladder} alt="Ladder" className="ladder1" />
      <img src={ladder} alt="Ladderr" className="ladder2" />
      <img src={ladder} alt="Ladderr" className="ladder3" />
      <img src={ladder} alt="Ladderr" className="ladder4" />
      <img src={ladder} alt="Ladderr" className="ladder5" />
      <img src={snakegif} alt="snake" className="snake1" />
      <img src={snakegif} alt="snake" className="snake2" />
      <img src={snakegif} alt="snake" className="snake3" />
      <img src={snakegif} alt="snake" className="snake4" />
      <img src={snakegif} alt="snake" className="snake5" />

      <div className="gridclass">
        {numberArr.map((value:number) => (
          <div
            className={classAssign(value)}
            id={value.toString()}
            style={{ background: Position(value) }}
          >
            {SnakeLadder(value)}
          </div>
        ))}

      </div>
      <div id="container">
        <div className="one">
          <div>
            <h1>
              Player <span className="num1">1</span> position :{" "}
              <span className="playerpoint">{p1position}</span>
            </h1>
          </div>
          <br />
          <div>
            <h1>
              Player <span className="num2">2</span> position :{" "}
              <span className="playerpoint">{p2position}</span>
            </h1>
          </div>
          <div className="tv">
            <h2 id="turn">{turn}</h2>
          </div>
        </div>
        <div className="two">
          <div>
            <img src={snakeladder} alt="snakel" id="laddersnake" />
          </div>
        </div>
        <div className="three">
          <div className="dicepoint">
            <h1 id="display">{dice}</h1>
          </div>
          <div className="dicepoint2">
            <img src={diceimg} alt="dice" id="diceimg" onClick={diceNumber} />
          </div>
        </div>
        <button onClick={refreshPage} id="refresh">
          <h2>RESET GAME</h2>
        </button>
      </div>
    </div>
  );
};

export default App2;
