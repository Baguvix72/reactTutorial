import React, { Component } from 'react';
import Head from './Head';
import CardDeck from './CardDeck';
import Foot from './Foot';

class App extends Component {
  render() {
    const {cnts} = this.props;
    return (
      <div className="App">
        <Head />
        <CardDeck />
        <CardDeck />
        <CardDeck />
        <Foot cnts = { cnts } />
      </div>
    );
  }
}

export default App;
