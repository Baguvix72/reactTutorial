import React, { Component } from 'react';
import Card from './Card'

class CardDeck extends Component {
  render() {
    return (
      <div class="container mt-2">
        <div className="card-deck">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default CardDeck;
