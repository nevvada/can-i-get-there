import React, { Component } from 'react';
import axios from 'axios';

import Meta from '../components/Meta';
import Form from '../components/Form';
import DisplayMessage from '../components/DisplayMessage';
import Navbar from '../components/Navbar';

import '../scss/styles.scss';

export default class Index extends Component {
  state = {
    elevatorOutages: {},
    stationClicked: null,
    isDisplaying: false,
    displayMessageText: ''
  };

  showElevatorStatus = stationName => {
    // if station name appears in elevator outage object, then format message
    if (this.state.elevatorOutages[stationName]) {
      console.log('full info', this.state.elevatorOutages[stationName]);
      let whichElevator = this.state.elevatorOutages[stationName].serving;

      let splitOutageStart = this.state.elevatorOutages[
        stationName
      ].outagedate.split(' ');
      let outageStartDate = `${
        splitOutageStart[0]
      } ${splitOutageStart[2].substr(0, splitOutageStart[2].length - 3) +
        splitOutageStart[3]}`;

      let splitOutageEnd = this.state.elevatorOutages[
        stationName
      ].estimatedreturntoservice.split(' ');

      let outageEndDate = `${splitOutageEnd[0]} ${splitOutageEnd[2].substr(
        0,
        splitOutageEnd[2].length - 3
      ) + splitOutageEnd[3]}`;

      let outageReason = this.state.elevatorOutages[
        stationName
      ].reason.toLowerCase();

      this.setState({
        stationClicked: true,
        elevatorsWorking: false,
        displayMessageText: `The elevator serving ${whichElevator} is down from ${outageStartDate} to ${outageEndDate} due to ${outageReason}.`
      });
    } else {
      this.setState({
        stationClicked: true,
        elevatorsWorking: true,
        displayMessageText: 'Elevators are working fine!'
      });
    }
  };

  componentDidMount() {
    axios
      .get('/elevators')
      .then(res => {
        const elevatorOutageData = {};
        res.data.NYCOutages.outage.map((each, i) => {
          if (each.ADA === 'Y') {
            elevatorOutageData[each.station] = each;
          }
        });
        this.setState({
          elevatorOutages: {
            ...this.state.elevatorOutages,
            ...elevatorOutageData
          }
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Meta />
        <Navbar />

        <header className="header">
          <h1 className="title">Can I Get There?</h1>
          <img
            src="static/images/Accessibility_Elevator.png"
            className="accessibility-image"
          />
        </header>
        <Form showElevatorStatus={this.showElevatorStatus} />
        {this.state.stationClicked ? (
          <DisplayMessage
            elevatorsWorking={this.state.elevatorsWorking}
            displayMessageText={this.state.displayMessageText}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}
