import React from 'react';

export default function Rook({type}) {
  return (
    <div className="piece rook">
      { type == 1 && <div className="black-rook"></div> }
      { type == 2 && <div className="white-rook"></div> }
    </div>
  )
}
