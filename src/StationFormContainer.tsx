import React, { Component } from 'react';
import axios from 'axios';
import get from 'lodash.get';

import FormSuggestion from './FormSuggestion';
import StationForm from './StationForm';

import stationsAPI from '../data/subway_stations';

import { Station } from './typings/subwayStation';

interface State {
  searchedStations: Station[];
  selectedStation: string;
}

class StationFormContainer extends Component {
  state: State = {
    searchedStations: [],
    selectedStation: '',
  };

  componentDidMount() {
    axios
      .get('/elevators')
      .then(res => {
        const elevatorStatuses = get(res, 'data.NYCOutages.outage', []);
        this.setState({ elevatorStatuses });
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevState) {
    const { selectedStation } = this.state;
    const { selectedStation: prevSelectedStation } = prevState;

    if (selectedStation !== prevSelectedStation) {
      this.getElevatorStatus();
    }
  }

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

  getElevatorStatus = () => {
    const { elevatorStatuses, selectedStation } = this.state;

    const matching = elevatorStatuses.find(elevatorStatus => {
      return elevatorStatus.station.match(selectedStation, 'gi');
    })

    // this.setState({ selectedStationStatus: matching })
  }

  setSelectedStation = (station: string) => {
    this.setState({ selectedStation: station });
  }

  renderSuggestions = () => {
    const { searchedStations } = this.state;

    return searchedStations.length 
      ? searchedStations.map(station => (
        <FormSuggestion 
          setSelectedStation={this.setSelectedStation}
          stationInfo={station}
        />)
      ) : <div />
  }

  render() {
    const { selectedStation } = this.state;

    return (
      <main className="station-form-container">
        <StationForm findStation={this.findStation} />
        <section className="form-suggestions-container">
        {this.renderSuggestions()}
        </section>
      </main>
    )
  }
}

export default StationFormContainer
