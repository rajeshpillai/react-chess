import React from 'react';


// Square component (container for pieces)
export default function Square({type, meta, piece, onClick, active, rotate}) {
  const actClass = active ? 'selected': '';
  const rot = rotate ? "rotate" : "";


  return (
    <div className={`cell ${type} ${actClass} ${rot}`} onClick={() => onClick(meta, piece)}>
        <span className="meta-idx">{meta.index}</span>
        {piece}
    </div>
  )
}

