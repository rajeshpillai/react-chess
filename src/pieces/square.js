import React from 'react';


// Square component (container for pieces)
export default function Square({type, meta, piece}) {
  return (
    <div className={`cell ${type}`}>
        {meta.row},{meta.col}
        {piece}
    </div>
  )
}

