import React, {useState, useEffect} from 'react';
import './App.css';

import {Square, King, Queen, Rook, Bishop, Knight, Pawn} from './pieces';


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
        board.push({ 
          row: r,
          col: c,
          type: classname,
          piece: undefined,
          cell: <Square type= {classname} meta={{row: r, col: c}} />

        });
      }
    }
    for(let i = 8; i < 16; i++) {
      board[i].piece = <Pawn type="1" />
      board[i + 40].piece = <Pawn type="2" />
    }

    board[0].piece = <Rook type="1" />
    board[7].piece = <Rook type="1" />
    board[56].piece = <Rook type="2" />
    board[63].piece = <Rook type="2" />


    board[1].piece = <Knight type="1" />
    board[6].piece = <Knight type="1" />
    board[57].piece = <Knight type="2" />
    board[62].piece = <Knight type="2" />


    board[2].piece = <Bishop type="1" />
    board[5].piece = <Bishop type="1" />
    board[58].piece = <Bishop type="2" />
    board[61].piece = <Bishop type="2" />

    board[3].piece = <Queen type="1" />
    board[59].piece = <Queen type="2" />
    board[4].piece = <King type="1" />
    board[60].piece = <King type="2" />



    return board;
  } 

  const setup = () => {
    const board = buildBoard();
    // Setup pawns
    // for(let i = 8; i < 8 + 8; i++) {
    //   board[i] = <Pawn type="1"/>
    // }
    return board;
  }

  const render = () => {
    const board = setup();
    console.log({board});
    const pieces = [];
    
    board.forEach((square, i)  => {
      pieces.push(
        <Square type={square.type} meta={square} piece={square.piece} />
     );
    });


    return pieces;
  }

  return (
    <div className="container">
      <div className="board">
       {render()} 
       </div>
    </div>
  );
}

export default App;
