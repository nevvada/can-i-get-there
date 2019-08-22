import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-unfetch';
import OptionCard from './OptionCard';
import axios from 'axios';
// import GetData from './GetData';
// import retrieveElevatorData from '../data/retrieveElevatorData';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      matches: [],
      isClicked: false,
      stationClicked: null,
      subwayClicked: null
    };

    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(id) {
    this.setState({
      stationClicked: this.state.matches[id].station,
      subwayClicked: this.state.matches[id].subways,
      matches: []
    });
    console.log('aaaa', this.state);
    this.props.showElevatorStatus(this.state.matches[id].station);
  }

  onChange = async e => {
    this.state.query = e.target.value;
    const res = await fetch('https://api.myjson.com/bins/1buo5h');
    const subways = await res.json();

    let matches = subways.filter(subway => {
      const regex = new RegExp(`^${this.state.query}`, 'gi');
      return subway.station.match(regex);
    });

    matches = matches.slice(0, 5);
    this.setState({ matches: matches });
  };

  render() {
    const matches = this.state.matches;
    let isClicked = this.state.isClicked;
    return (
      <>
        <form>
          <input
            type="text"
            name="station"
            onChange={this.onChange.bind(this)}
          />
        </form>
        {matches.map((each, i) => {
          return (
            <OptionCard
              id={i}
              station={each.station}
              subways={each.subways}
              onClick={this.changeSelected}
            />
          );
        })}
      </>
    );
  }
}
