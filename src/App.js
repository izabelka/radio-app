import React, { Component } from 'react';
import radioStations from './radio-stations.json';
import Stations from './Stations';
import './reset.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stationList: radioStations,
      audioPlayer: ' ',
      currentStationName: ' '
    };
    this.changeAudioPlayerSrc = this.changeAudioPlayerSrc.bind(this);
  }

  changeAudioPlayerSrc (newSrc, newName) {
    this.setState({
      audioPlayer: newSrc ,
      currentStationName: newName
    })
  }

  render() {
    var stationList = this.state.stationList;
    stationList = stationList.map(function(station, index) {
      return(
        <Stations key={ index }
          station={ station } changeSrc={this.changeAudioPlayerSrc}/>
      )
    }, this)

    return (
      <div>
        <audio id="audio-player" src={this.state.audioPlayer} autoPlay></audio>
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
            currently playing
            </div>
            <div className="radio-footer-station-name">
              {this.state.currentStationName}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
