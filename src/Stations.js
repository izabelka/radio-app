import React, { Component } from 'react';

class Stations extends Component {
  render() {
    return (
        <li>
          <div className="station-selected">
            <div className="minus-circle">
              <div className="minus-stroke">
              </div>
            </div>
            <div className="picture">
            </div>
            <div className="minus-circle">
              <div className="minus-stroke"></div>
              <div className="plus-stroke"></div>
            </div>
          </div>
          <div className="station-container">
            <div className="station-name">
              {this.props.station.name}
            </div>
            <div className="station-frequency">
              {this.props.station.frequency}
            </div>
          </div>
        </li>
      )
    }
  }

export default Stations;