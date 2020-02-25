import React from 'react';

const SubwayLogo = ({ colorClassName, subwayLine }) => {
  return <span className={'subway-logo ' + colorClassName}>{subwayLine}</span>;
};

export default SubwayLogo;
