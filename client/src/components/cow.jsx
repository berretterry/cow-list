import React from 'react';

var Cow = function({cowInfo, cowClick}) {
  return (
    <div>
      <h2
      className="cow-name"
      onClick={(e) => cowClick(cowInfo)}
      >
      {cowInfo.cowname}
      </h2>
    </div>
  )
}

export default Cow;