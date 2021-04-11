import React from 'react';


// Square component (container for pieces)
export default function Square({type, meta, piece, onClick, active}) {
  const actClass = active ? 'selected': '';
  return (
    <div className={`cell ${type} ${actClass}`} onClick={() => onClick(meta, piece)}>
        {meta.index}
        {piece}
    </div>
  )
}

