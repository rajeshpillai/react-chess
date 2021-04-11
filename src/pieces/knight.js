import React from 'react';

export default function Knight({type}) {
  return (
    <div className="piece knight">
      { type == 1 && <div className="black-knight"></div> }
      { type == 2 && <div className="white-knight"></div> }
    </div>
  )
}
