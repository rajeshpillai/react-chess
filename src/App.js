import React, {useState, useEffect} from 'react';
import './App.css';

import {Square, King, Queen, Rook, Bishop, Knight, Pawn} from './pieces';


const pieces = {
  pawn: (type) => <Pawn type={type} />,
  rook: (type) => <Rook type={type} />,
  knight: (type) => <Knight type={type} />,
  bishop: (type) => <Bishop type={type} />,
  queen: (type) => <Queen type={type} />,
  king: (type) => <King type={type} />,
}

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(buildBoard())
  }, [])

  const isEven = (num) => num % 2;

  const buildBoard = () => {
    const board = [];

    let index = 0;
    for(let r = 0; r < 8; r++) {
      let start = 65;
      for (let c = 0; c < 8; c++) {
        const classname = (isEven(r) && isEven(c)) ||  (!isEven(r) && !isEven(c)) ? "white"  : "black";
        board.push({ 
          row: r,
          col: c,
          index: index ++, 
          type: classname,
          piece: undefined,
          cell: <Square type= {classname} meta={{row: r, col: c}} />

        });
      }
    }
    for(let i = 8; i < 16; i++) {
      board[i].piece = { name: "pawn", type: "1"}
      board[i + 40].piece = {name: "pawn", type: "2"}
    }

    board[0].piece = { name: "rook", type: "1"}
    board[7].piece = { name: "rook", type: "1"}
    board[56].piece = { name: "rook", type: "2"}
    board[63].piece = { name: "rook", type: "2"}


    board[1].piece = { name: "knight", type: "1"}
    board[6].piece = { name: "knight", type: "1"}
    board[57].piece = { name: "knight", type: "2"}
    board[62].piece = { name: "knight", type: "2"}


    board[2].piece = { name: "bishop", type: "1"}
    board[5].piece = { name: "bishop", type: "1"}
    board[58].piece = { name: "bishop", type: "2"}
    board[61].piece = { name: "bishop", type: "2"}

    board[3].piece = { name: "queen", type: "1"}
    board[59].piece = { name: "queen", type: "2"}
    board[4].piece = { name: "king", type: "1"}
    board[60].piece = { name: "king", type: "2"}

    return board;
  } 

  
  const handleClick = (meta, piece) => {
    console.log(meta, piece);
  }

  const render = () => {
    // const board = buildBoard();
    console.log({board});
    const players = [];
    
    board.forEach((square, i)  => {
      let piece = undefined; 
      let p = undefined; 

      if (square.piece && pieces[square.piece.name]){
        p = pieces[square.piece.name] (square.piece.type);
      }

      piece = <Square onClick={handleClick} type={square.type} meta={square} piece={p}  />        
      
      players.push(
        piece
      );
    });
    return players;
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
