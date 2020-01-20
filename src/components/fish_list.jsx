import React, { Component } from 'react';

import Fish from './fish';

class FishList extends Component {
  render() {
    const { fishes } = this.props;
    // convert obj to array
    const fish_array = Object.keys(fishes).map(key => fishes[key]);

    return fish_array.map(fish => {
        return (
        <Fish
          key={fish}
          fish={fish}
        />
      );
    });
  }
}

export default FishList;
