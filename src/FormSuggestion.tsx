import React from 'react';

import { Station } from './typings/subwayStation';

interface Props {
  stationInfo: Station;
}

const FormSuggestion = ({ stationInfo }: Props) => {
  return (
    <h2>{stationInfo.stationName}</h2>
  )
};

export default FormSuggestion;