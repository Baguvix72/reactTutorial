import React from 'react';
import CardFoot from "./CardFoot";

function Foot({ cnts }) {
    return (
      <div className="foot">
        <div class="container mt-2">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <div class="row">
                <CardFoot cnt = { cnts[0] } />
                <CardFoot cnt = { cnts[1] } />
                <CardFoot cnt = { cnts[2] } />
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
}

export default Foot;
