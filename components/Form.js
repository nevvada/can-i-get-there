import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-unfetch';
import OptionCard from './OptionCard';
// import GetData from './GetData';
// import retrieveElevatorData from '../data/retrieveElevatorData';

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

  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await res.json;
  // console.log(data);
  // return data;
  // res.text().then(data => {
  // console.log('biiiitch', data);
  // });
  // }

  changeSelected(id) {
    this.setState({
      stationClicked: this.state.matches[id].station,
      subwayClicked: this.state.matches[id].subways,
      matches: []
    });

    // retrieveElevatorData();
    // GetData();
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

  // async componentDidMount() {
  //   const response = await fetch(
  //     'http://web.mta.info/developers/data/nyct/nyct_ene.xml',
  //     {
  //       method: 'GET',
  //       headers: {
  //         'access-control-allow-origin': '*',
  //         'Content-type': 'application/json; charset=UTF-8'
  //       }
  //     }
  //   );
  //   console.log('response');
  // }

  render() {
    const matches = this.state.matches;
    let isClicked = this.state.isClicked;
    // if (isClicked) {
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

    // } else {
    //   return (
    //     <>
    //       <form>
    //         <input
    //           type="text"
    //           name="station"
    //           onChange={this.onChange.bind(this)}
    //         />
    //       </form>
    //       {}
    //     </>
    //   );
    // }
  }
}
