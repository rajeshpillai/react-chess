import React from 'react';

export default function Knight({type}) {
  return (
    <div className="piece-container knight">
      { type == 1 && <div className="piece black-knight"></div> }
      { type == 2 && <div className="piece white-knight"></div> }
    </div>
  )
}
