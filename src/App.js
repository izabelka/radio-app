import React, { Component } from 'react';
import radioStations from './radio-stations.json';
import Stations from './Stations';
import './reset.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stationList: []
    };
  }

  render() {
    var stationList = this.state.stationList;
    stationList = stationList.map(function(station, index) {
      return(
        <Stations key={ index }
          station={ station } />
      )
    })

    return (
      <div>
        <audio id="audio-player" autoPlay></audio>
        <div className="radio-container">
          <div className="radio-header">
            <div className="arrow-back"></div>
            <span>Stations</span>
            <div className="switch-button-circle">
              <div className="switch-button-stroke"></div>
            </div>
          </div>
          <div className="radio-stations">
            <ul>
              {stationList}
            </ul>
          </div>
          <div className="radio-footer">
            <div className="currently-playing">
            </div>
            <div className="radio-footer-station-name">
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      stationList: radioStations
    });
  }
}

export default App;
