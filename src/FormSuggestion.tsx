import React from 'react';

import { Station } from './typings/subwayStation';
import SubwayLogo from './SubwayLogo';

interface Props {
  stationInfo: Station;
}

const subwayDict = {
  A: 'blue',
  C: 'blue',
  E: 'blue',
  B: 'orange',
  D: 'orange',
  F: 'orange',
  M: 'orange',
  G: 'light-green',
  J: 'brown',
  Z: 'brown',
  L: 'light-gray',
  N: 'yellow',
  Q: 'yellow',
  R: 'yellow',
  S: 'dark-gray',
  '1': 'red',
  '2': 'red',
  '3': 'red',
  '4': 'green',
  '5': 'green',
  '6': 'green',
  '7': 'purple'
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
    <article className="form-suggestion">
      <h2>{stationName}</h2>
      {renderSubwayLineLogos(subwayLines)}
    </article>
  );
};

export default FormSuggestion;
