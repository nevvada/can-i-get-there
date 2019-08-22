import React, { Component } from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Form from '../components/Form';

export default class Index extends Component {
  state = {
    elevatorOutages: null,
    stationClicked: null,
    isDisplaying: false
  };

  showElevatorStatus = stationName => {
    if (!this.state.stationClicked) {
      this.setState({
        stationClicked: stationName,
        isDisplaying: true
      });
    }
  };

  componentDidMount() {
    fetch('/elevators')
      .then(res => res.json())
      .then(data => {
        const brokenElevators = {};
        data.NYCOutages.outage.forEach(each => {
          brokenElevators[each.station] = each;
        });
        this.setState({ ...this.state.elevatorOutages, brokenElevators });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Layout>
        <>
          <h1>Welcome to Can I Get There</h1>
          <Form showElevatorStatus={this.showElevatorStatus} />
          {this.state.stationClicked &&
          this.state.elevatorOutages[this.state.stationClicked] ? (
            'its here'
          ) : (
            <div />
          )}
        </>
      </Layout>
    );
  }
}

// const Index = props => (
//   <Layout>
//     <>
//       <h1>Welcome to Can I Get There</h1>
//       <Form />
//       {/* {props} */}
//     </>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     'http://web.mta.info/developers/data/nyct/nyct_ene.xml'
//   );
//   console.log(res);
//   return { res };
// };
