import React, { Component } from 'react';
import axios from 'axios';

import '../scss/styles.scss';
import StationFormContainer from './StationFormContainer';

export class App extends Component {
  state = {
    elevatorOutages: {},
    stationClicked: null,
    isDisplaying: false,
    displayMessageText: ''
  };

  componentDidMount() {
    console.log('did mount')
    axios
      .get('/elevators')
      .then(res => {
        console.log('lemme see', res)
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {/* <Meta /> */}
        {/* <Navbar /> */}

        <header className='header'>
          <h1 className='title'>Can I Get There?</h1>
          <img
            src='static/images/Accessibility_Elevator.png'
            className='accessibility-image'
          />
        </header>
        <StationFormContainer />
      </>
    );
  }
}

export default App;
