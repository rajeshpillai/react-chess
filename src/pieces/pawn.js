import React from 'react';

export default function Pawn({type}) {
  return (
    <div className="piece pawn animate__animated animate__rubberBand">
      { type == 1 && <div className="black-pawn"></div> }
      { type == 2 && <div className="white-pawn"></div> }
    </div>
  )
}