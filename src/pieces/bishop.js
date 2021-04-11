import React from 'react';

export default function Bishop({type}) {
  return (
    <div className="piece bishop">
      { type == 1 && <div className="black-bishop"></div> }
      { type == 2 && <div className="white-bishop"></div> }
    </div>
  )
}
