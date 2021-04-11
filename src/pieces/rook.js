import React from 'react';

export default function Rook({type}) {
  return (
    <div className="piece-container rook">
      { type == 1 && <div className="piece black-rook"></div> }
      { type == 2 && <div className="piece white-rook"></div> }
    </div>
  )
}
