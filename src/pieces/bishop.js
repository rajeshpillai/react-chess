import React from 'react';

export default function Bishop({type}) {
  return (
    <div className="piece-container bishop">
      { type == 1 && <div className="piece black-bishop"></div> }
      { type == 2 && <div className="piece white-bishop"></div> }
    </div>
  )
}
