import React, { Component } from 'react';
import Head from './Head';
import CardList from './CardList';
import Foot from './Foot';
import bg_color from './DataBackground';

class App extends Component {
  render() {
    const {cnts} = this.props;
    const {srvc} = this.props;
    return (
      <div className={"App " + bg_color[this.getRandomInt(0, bg_color.length - 1)]}>
        <Head />
        <CardList srvc = {srvc} />
        <Foot cnts = { cnts } />
      </div>
    );
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default App;
