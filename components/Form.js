import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'isomorphic-unfetch';
import OptionCard from './OptionCard';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      matches: [],
      isClicked: false,
      stationClicked: null
    };

    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(id) {
    this.setState({
      isClicked: true,
      stationClicked: this.state.matches[id].station,
      subwayClicked: this.state.matches[id].subways,
      matches: []
    });
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
            // <li onClick={this.changeSelected} key={i}>
            //   {each.station}
            //   {each.subways}
            // </li>
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
