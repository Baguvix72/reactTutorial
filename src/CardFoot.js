import React, { Component } from 'react';
import mobile from './mobile.svg';

class CardFoot extends Component {
  render() {
    return (
      <div class="col-sm">
        <div class="row align-items-center">
          <div class="col-sm-3">
            <img src={mobile} alt="mobile" height="100"></img>
          </div>
          <div class="col-sm-9">
            <h2>Телефон</h2>
            <p class="lead">+7(4742) 55-69-60</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFoot;
