import React from 'react';


// Square component (container for pieces)
export default function Square({type, meta, piece, onClick}) {
  return (
    <div className={`cell ${type}`} onClick={() => onClick(meta, piece)}>
        {meta.row},{meta.col}
        {piece}
    </div>
  )
}

