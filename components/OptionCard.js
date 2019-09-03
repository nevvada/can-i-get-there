import React from 'react';

const addStyling = subwayLine => {
  if (subwayLine.innerHTML === 'A') {
    subwayLine.addAt;
  }
};

const OptionCard = props => {
  return (
    <div
      className="option-card"
      onClick={() => {
        props.changeSelected(props.station);
        props.clearInput();
      }}
    >
      <section className="subway-station">{props.station}</section>
      <section className="subway-lines">
        {props.subways.map(each => {
          let color;
          if (each === 'A' || each === 'C' || each === 'E') {
            color = 'blue';
          } else if (
            each === 'B' ||
            each === 'D' ||
            each === 'F' ||
            each === 'M'
          ) {
            color = 'orange';
          } else if (each === 'G') {
            color = 'lightgreen';
          } else if (each === 'J' || each === 'Z') {
            color = 'brown';
          } else if (each === 'L') {
            color = 'lightgrey';
          } else if (
            each === 'N' ||
            each === 'Q' ||
            each === 'R' ||
            each === 'W'
          ) {
            color = 'yellow';
          } else if (each === 'S') {
            color = 'darkgrey';
          } else if (each === '1' || each === '2' || each === '3') {
            color = 'red';
          } else if (each === '4' || each === '5' || each === '6') {
            color = 'green';
          } else if (each === '7') {
            color = 'purple';
          }

          return (
            <span key={each} className={`subway-line ${color}-line`}>
              {each}
            </span>
          );
        })}
      </section>
    </div>
  );
};

export default OptionCard;
