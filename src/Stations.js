import React, { Component } from 'react';
import ShowStation from './ShowStation';

class Stations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSelectedStation: false
    };
  }

  selectStation() {
    if(!this.state.showSelectedStation){
        this.setState({
          showSelectedStation: true 
        })
      }else{
        this.setState({
          showSelectedStation: false 
        })
    }
  }

  componentWillMount() {
    this.style = {
      backgroundImage: 'url(' + this.props.station.picture + ')'      
    }
  }

  render() {
    var expandLi = {
      'height': ''
    };
    if (this.state.showSelectedStation) {
        expandLi = {
          'height': 10+'em'
        };
    }
    return (
        <li style={expandLi} onClick={this.selectStation.bind(this)}>
          { this.state.showSelectedStation && <ShowStation backgroundImage={this.style}/>}
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