import React from 'react';

export default function Queen({type}) {
  return (
    <div className="piece-container queen">
      { type == 1 && <div className="piece black-queen"></div> }
      { type == 2 && <div className="piece white-queen"></div> }
    </div>
  )
}
