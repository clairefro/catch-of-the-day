import React, { Component } from 'react';

import Header from './header';
import Order from './order';
import Inventory from './inventory';
import FishList from './fish_list';

import sampleFishes from '../sample-fishes';

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // to update state:
    // 1. take copy of existing state (no mutation!)
    const fishes = { ...this.state.fishes }  // copy object with object spread
    // 2. Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish; // key has unique time identifier
    // 3. set new fishes obj to statusRef
    this.setState({
      fishes // == fishes: fishes
    })
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  addToOrder = (key) => {
    console.log('enetered add');
    // 1. take copy of existing state (no mutation!)
    const order = { ...this.state.order };  // copy object with object spread
    // 2. Add order or update order number
    order[key] = order[key] + 1 || 1;
    // 3. set new fishes obj to statusRef
    this.setState({
      order // == order: order
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fish are Fresh"/>
          <FishList
            fishes={this.state.fishes}
            addToOrder={this.addToOrder}
          />
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
