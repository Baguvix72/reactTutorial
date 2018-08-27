import React from 'react';
import CardDeck from './CardDeck';

function CardList({ srvc }) {
    const countServices = srvc.length;
    const row = countServices / 3;
    const CardDeckArr = [];
    for (let i = 0; i < row; i++) {
      const ExtandCardDeckArr = [];
      for (let j = i * 3; j < (i * 3 + 3); j++) {
        ExtandCardDeckArr.push(srvc[j]);
      }
      CardDeckArr.push(<CardDeck srvc = { ExtandCardDeckArr } />)
    }

    return (
      <div className="list">
        <div className="container mt-1">
          <div className="jumbotron jumbotron-fluid rounded border border-dark">
            <div className="container">
              <div className="row">
                {CardDeckArr}
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
}

export default CardList;
