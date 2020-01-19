import React, { Component } from 'react';

class StorePicker extends Component {
  // syntax for explicitly this-binding methods (if not using arrow function)
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault(); //stop page reload on form submit
    // grab text from myInput
    const storeName = this.myInput.current.value;
    // change url with push state (change without refresh/losing memory)
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
       <form  className="store-selector" onSubmit={this.goToStore}>
        <h2>Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store name"/>
        <button type="submit">Visit Store ></button>
       </form>
    );
  }
}

export default StorePicker;
