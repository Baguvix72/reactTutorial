import React from 'react';

function CardFoot({ cnt }) {
    return (
      <div class="col-sm">
        <div class="row align-items-center">
          <div class="col-sm-3">
            <img src={ cnt.img } alt="mobile" height="100"></img>
          </div>
          <div class="col-sm-9">
            <h2>{ cnt.name }</h2>
            <p class="lead">{ cnt.data }</p>
          </div>
        </div>
      </div>
    );
}

export default CardFoot;
