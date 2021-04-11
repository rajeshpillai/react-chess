import React from 'react';

export default function King({type}) {
  return (
    <div className="piece king">
      { type == 1 && <div className="black-king"></div> }
      { type == 2 && <div className="white-king"></div> }
    </div>
  )
}
