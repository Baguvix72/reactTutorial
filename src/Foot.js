import React, { Component } from 'react';
import CardFoot from "./CardFoot"

class Foot extends Component {
  render() {
    return (
      <div className="foot">
        <div class="container mt-2">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <div class="row">
                <CardFoot />
                <CardFoot />
                <CardFoot />
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Foot;
