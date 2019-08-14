import React, { useState } from 'react';

const OptionCard = props => {
  // console.log('baby', props);
  return (
    <div onClick={() => props.onClick(props.id)}>
      {props.station} - {props.subways}
    </div>
  );
};

export default OptionCard;
