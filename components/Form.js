import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-unfetch';
import OptionCard from './OptionCard';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      subwayStations: null,
      matches: [],
      isClicked: false,
      stationClicked: null
    };

    this.changeSelected = this.changeSelected.bind(this);
  }

  clearInput = () => {
    document.querySelector('.station-input').value = '';
  };

  // select specific subway station from list of suggested
  changeSelected(station) {
    this.setState({
      query: '',
      stationClicked: station,
      matches: []
    });
    this.props.showElevatorStatus(station);
    // this.props.showElevatorStatus(this.state.matches[id].station);
  }

  // autosuggest up to 5 suggestions based on what user has typed
  onChange = e => {
    this.state.query = e.target.value;

    // if input is empty, don't show any matches
    if (this.state.query === '') {
      this.setState({ matches: [] });
      return;
    }

    // match input text to possible subway stations
    let matches = this.state.subwayStations.filter(subway => {
      const regex = new RegExp(`.*?${this.state.query}`, 'gi');
      return subway.station.match(regex);
    });

    // only show 5 options. set as state
    matches = matches.slice(0, 5);
    this.setState({ matches: matches });
  };

  // fetch list of subway stations
  componentDidMount() {
    axios
      .get('https://api.myjson.com/bins/o8yhz')
      .then(res => {
        this.setState({
          subwayStations: res.data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const matches = this.state.matches;
    return (
      <div className="form-styles">
        <form>
          <input
            className="station-input"
            type="text"
            name="station"
            onChange={this.onChange.bind(this)}
            autoComplete="off"
          />
          <span className="blinking-cursor">|</span>
          <span className="directions">
            Just type a station to get started!
          </span>
        </form>
        {matches.map((each, i) => {
          return (
            <OptionCard
              key={i}
              station={each.station}
              locations={each.locations}
              subways={each.subways}
              changeSelected={this.changeSelected}
              clearInput={this.clearInput}
            />
          );
        })}
      </div>
    );
  }
}
