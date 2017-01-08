import React, { Component } from 'react';

class ShowStation extends Component {
    render() {
      return (
        <div className="station-selected">
          <div className="minus-circle">
            <div className="minus-stroke">
            </div>
          </div>
          <div className="picture" style={this.props.backgroundImage}>
          </div>
          <div className="minus-circle">
            <div className="minus-stroke"></div>
            <div className="plus-stroke"></div>
          </div>
        </div>
      )
    }
  }

export default ShowStation;