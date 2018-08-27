import React, { Component } from 'react';
import ModalWindow from './ModalWindow';
import color from './DataColor';

class Card extends Component {
  render() {
    const {srvc} = this.props;
    return (
      <div class={color[this.getRandomInt(0, color.length - 1)]}>
        <div class="card-header">
        <h5 class="card-title">{srvc.name}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">{srvc.discription}</p>
        </div>
        <div class="card-footer text-muted">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Мне это интересно!
          </button>
        </div>
        <ModalWindow />
      </div>
    );
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Card;
