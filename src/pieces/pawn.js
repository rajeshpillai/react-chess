import React from 'react';

export default function Pawn({type}) {
  return (
    <div className="piece-container pawn animate__animated animate__rubberBand">
      { type == 1 && <div className="piece black-pawn"></div> }
      { type == 2 && <div className="piece white-pawn"></div> }
    </div>
  )
}