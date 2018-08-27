import React, { Component } from 'react';
import Card from './Card'

class CardDeck extends Component {
  render() {
    const {srvc} = this.props;
    const cardArr = [];
    for (let i = 0; i < srvc.length; i++) {
      cardArr.push(<Card srvc = { srvc[i] } />)      
    }
    return (
      <div className="container mt-2">
        <div className="card-deck">
          {cardArr}
        </div>
      </div>
    );
  }
}

export default CardDeck;
