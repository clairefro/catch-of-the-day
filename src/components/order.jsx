import React, { Component } from 'react';

import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvail = fish.status === 'available';
    // handle sold out
    if (!isAvail) {
      console.log('entered if')
      return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer avail</li>
    }
    return (<li key={key}>
      {count} lbs {fish.name}
      {formatPrice(count *fish.price)}
    </li>);
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key)=> {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvail = fish && fish.status === 'available';
      // add to price if fish available
      if(isAvail) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal
    }, 0); // <-- starting value

    return (
     <div className="order-wrap">
     <h2>Order</h2>
     <ul className="order">{orderIds.map(this.renderOrder)}
     </ul>
     <div className={total}>
       <strong>{formatPrice(total)}</strong>
     </div>
     </div>
    );
  }
}

export default Order;
