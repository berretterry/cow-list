import React from 'react';

var AddcowForm = function({nameValue, discValue, newCowHandler, submitCowHandler}) {
  return (
    <div>
      <form onSubmit={(e) => submitCowHandler(e)}>
        <h3 className='addcow-form'>Input a Cow's Name and a Discription!</h3>
        <input
          type='text'
          id='newCowName'
          name='newCowName'
          className='name-input'
          value={nameValue}
          onChange={(e) => newCowHandler(e)}
          placeholder='Enter Cow Name'
        >
        </input><br/>
        <input
        type='text'
        id='newCowDisc'
        name='newCowDisc'
        className='disc-input'
        value={discValue}
        onChange={(e) => newCowHandler(e)}
        placeholder='Enter Cow Discription'
        >
        </input><br/>
        <button
          className='addcow-button'
        >
          Add Cow!
        </button>
      </form>
    </div>
  )
}

export default AddcowForm