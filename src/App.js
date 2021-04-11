import React, {useState, useEffect} from 'react';
import './App.css';

import {Pawn} from './pieces/pawn';

function loadGameState() {
  const data = [];
  for(let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      data.push({i, j});
    }
  }

  return data;
}

// Square component (container for pieces)
function Square({type, meta, piece}) {
  return (
    <div className={`cell ${type}`}>
        {meta.row},{meta.col}
        {piece}
    </div>
  )
}


function Rook({type}) {
  return (
    <div className="rook">
      { type == 1 && <div className="black-rook"></div> }
      { type == 2 && <div className="white-rook"></div> }
    </div>
  )
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
      //const loc = <Square type= {square.type} meta={square} piece={<Pawn type="1"/>} />;
      // const loc = <Square type= {square.type} meta={square}  />;
      pieces.push(
        <Square type={square.type} meta={square} piece={square.piece} />
     );
      
    });



    //  pieces[8].piece = <Pawn type="1" />
    // board[i + 40].piece = Pawn(1);
    

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
