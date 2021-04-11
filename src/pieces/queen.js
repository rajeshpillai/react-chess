import React from 'react';

export default function Queen({type}) {
  return (
    <div className="piece queen">
      { type == 1 && <div className="black-queen"></div> }
      { type == 2 && <div className="white-queen"></div> }
    </div>
  )
}
