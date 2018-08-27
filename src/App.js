import React, { Component } from 'react';
import Head from './Head';
import CardList from './CardList';
import Foot from './Foot';

class App extends Component {
  render() {
    const {cnts} = this.props;
    const {srvc} = this.props;
    return (
      <div className="App">
        <Head />
        <CardList srvc = {srvc} />
        <Foot cnts = { cnts } />
      </div>
    );
  }
}

export default App;
