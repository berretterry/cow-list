import React from 'react';
import Cow from './cow.jsx'

var Cows = function({cowData, cowClick}) {
  return(
    <div className="cow-list">
      {cowData.map(cow => {
        return (
        <Cow cowInfo={cow} key={`${cow.cowname}`} cowClick={cowClick}/>
        );
      })}
    </div>
  );
}

export default Cows;