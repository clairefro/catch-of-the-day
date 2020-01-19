import React, { Component } from 'react';

import Header from './header';
import Order from './order';
import Inventory from './inventory';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fish are Fresh"/>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
