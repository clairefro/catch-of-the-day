import React, { Component } from 'react';

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();


  createFish = (e) => {
    e.preventDefault();
    // console.log(this.nameRef);
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: this.priceRef.current.value,
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value
    }
    console.log(fish);
  }

  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          name= "name"
          ref={this.nameRef}
          placeholder="name"/>
        <input
          type="text"
          name= "price"
          ref={this.priceRef}
          placeholder="price"/>
        <select
          type="text"
          name= "status"
          ref={this.statusRef}
          placeholder="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          name= "desc"
          ref={this.descRef}
          placeholder="desc"></textarea>
        <input
        type="text"
        name= "image"
        ref={this.imageRef}
        placeholder="image"/>
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
