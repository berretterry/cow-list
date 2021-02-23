import React from 'react';

var Addcow = function({newCow}) {
  return (
    <div>
      <h3 className='addcow-text'>Add a Cow!</h3>
      <input
        type='button'
        className='addcow-button'
        value='New Cow!'
        onClick={(e) => newCow()}
      >
      </input>
    </div>
  )
}

export default Addcow