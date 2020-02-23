import React, { Component } from 'react';

import FormSuggestion from './FormSuggestion';
import StationForm from './StationForm';

import stationsAPI from '../data/subway_stations';

class StationFormContainer extends Component {
  state = {
    searchedStations: [],
    selectedStation: '',
  };

  render() {
    return (
      <>
        <h2>This is the station form container.</h2>
      </>
    )
  }
}
