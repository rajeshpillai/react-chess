import React from 'react';

export function Pawn({type}) {
  return (
    <div className="rook">
      { type == 1 && <div className="black-pawn"></div> }
      { type == 2 && <div className="white-pawn"></div> }
    </div>
  )
}