import React, { Component } from 'react';

import Fish from './fish';

class FishList extends Component {
  render() {
    const { fishes } = this.props;
    const fish_array = Object.keys(fishes).map(key => fishes[key]);
    console.log(fishes);
    console.log(fish_array);

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
