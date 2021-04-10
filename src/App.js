import React, {useState, useEffect} from 'react';
import './App.css';

function loadGameState() {
  const data = [];
  for(let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      data.push({i, j});
    }
  }

  return data;
}

function App() {
  const [gameState, setGameState] = 
        useState(loadGameState());

  const isEven = (num) => num % 2;

  const buildBoard = () => {
    const board = [];

    for(let r = 0; r < 8; r++) {
      let start = 65;
      for (let c = 0; c < 8; c++) {
        const classname = (isEven(r) && isEven(c)) ||  (!isEven(r) && !isEven(c)) ? "white"  : "black";
        board.push(
          <div className={`cell ${classname}`}>
            {r + 1} {String.fromCharCode(start++)}
          </div>
        );
  
      }
    }
    return board;
  } 

  return (
    <div className="container">
      <div className="board">
       {buildBoard()}    
       </div>
    </div>
  );
}

export default App;
