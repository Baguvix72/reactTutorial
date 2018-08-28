import React, { Component } from 'react';
import ModalWindow from './ModalWindow';
import color from './DataColor';

class Card extends Component {

  constructor(props){
    super(props);

    this.state = {
      WindowVisible: true 
    }
  }

  render() {
    const {srvc} = this.props;
    const Visible = this.state.WindowVisible;
    const cardHeader = Visible ? <h5 class="card-title">{srvc.name}</h5> : null;

    return (
      <div class={color[this.getRandomInt(0, color.length - 1)]}>
        <div class="card-header">
            <div className="text-left">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={this.changeVisible}/>
            </div>
        {cardHeader}
        {/* <h5 class="card-title">{srvc.name}</h5> */}
        </div>
        <div class="card-body">
          <p class="card-text">{srvc.discription}</p>
        </div>
        <div class="card-footer text-muted">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >
            Мне это интересно!
          </button>
        </div>
        <ModalWindow />
      </div>
    );
  }

  changeVisible = () => {
    this.setState({
      WindowVisible: !this.state.WindowVisible
    })
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Card;
