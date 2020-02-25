import React from 'react';

import { Station } from './typings/subwayStation';

interface Props {
  stationInfo: Station;
}

const renderSubwayLineLogos = (subwayLines: Station['subwayLines']) => {
  return subwayLines.map(subwayLine => {
    return (
      <SubwayLogo
        colorClassName={subwayDict[subwayLine]}
        key={subwayLine}
        subwayLine={subwayLine}
      />
    )
  });
};

const FormSuggestion = ({ stationInfo }: Props) => {
  const { stationName, subwayLines } = stationInfo;

  return (
    <>
      <h2>{stationName}</h2>
      {renderSubwayLineLogos(subwayLines)}
    </>
  );
};

export default FormSuggestion;
