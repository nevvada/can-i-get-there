import React, { Component } from 'react';

import FormSuggestion from './FormSuggestion';
import StationForm from './StationForm';

import stationsAPI from '../data/subway_stations';

class StationFormContainer extends Component {
  state = {
    searchedStations: [],
    selectedStation: '',
  };

  findStation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;

    if (value.length === 0) {
      this.setState({ searchedStations: [] });
      return;
    }

    const regex = new RegExp(value, 'gi');
    const matches = stationsAPI.filter(station => station.stationName.match(regex));
    const matchesToDisplay = matches.slice(0, 5);

    this.setState({ searchedStations: matchesToDisplay });
  }

  setSelectedStationAndFetchElevatorStatus = (station) => {
    this.setState({ selectedStation });
  }

  renderSuggestions = () => {
    const { searchedStations } = this.state;

    return searchedStations.length 
      ? searchedStations.map(station => <FormSuggestion stationInfo={station} />)
      : <div />
  }

  render() {
    return (
      <>
        <h2>This is the station form container.</h2>
        <StationForm findStation={this.findStation} />
        {this.renderSuggestions()}
      </>
    )
  }
}

export default StationFormContainer