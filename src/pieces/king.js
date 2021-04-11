import React from 'react';

export default function King({type}) {
  return (
    <div className="piece-container king">
      { type == 1 && <div className="piece black-king"></div> }
      { type == 2 && <div className="piece white-king"></div> }
    </div>
  )
}
