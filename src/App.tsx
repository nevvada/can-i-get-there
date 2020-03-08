import React, { Component } from 'react';

import '../scss/styles.scss';
import StationFormContainer from './StationFormContainer';

export class App extends Component {
  state = {
    elevatorOutages: [],
    stationClicked: null,
    isDisplaying: false,
    displayMessageText: ''
  };

  render() {
    return (
      <div className="app-wrapper">
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
      </div>
    );
  }
}

export default App;
