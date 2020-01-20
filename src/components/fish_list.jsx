import React, { Component } from 'react';

import Fish from './fish';

class FishList extends Component {
  render() {
    const { fishes } = this.props;

    return (
      <ul>
        {Object.keys(fishes).map(key => (
          <Fish
            key={key}
            index={key}
            fish={fishes[key]}
            addToOrder={this.props.addToOrder}
          />
        ))}
      </ul>
    );
  }
}

export default FishList;
