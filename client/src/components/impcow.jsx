import React from 'react';

var ImpCow = function({clickedCow}) {
  return (
    <div>
      <h1
        className='imp-cow'
      >
        {clickedCow.cowname}:<br/>
        {clickedCow.disc}
      </h1>
    </div>
  );
}

export default ImpCow;