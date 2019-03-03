import React, { Component } from 'react'

class addFishForm extends Component {
    nameRef=React.createRef();
    priceRef=React.createRef();
    statusRef=React.createRef();
    descRef=React.createRef();
    imageRef=React.createRef();


    createFish=event=>{
        // 1 - Stop form from submitting
        event.preventDefault();

        // 2- Getting value from the input
        const fish= {
            name : this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image : this.imageRef.current.value
        }

        this.props.addFish(fish);
    }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
      <input ref={this.nameRef} name="name" placeholder="Name" required/>
      <input ref={this.priceRef} name="price" placeholder="Price" required/>
      <select ref={this.statusRef} name="status">
      <option  value="avaiable">Fresh!</option>
      <option value="unavailable">Sold Out</option>
      </select>
      <textarea ref={this.descRef} name="desc"></textarea>
      <input ref={this.imageRef} name="image" placeholder="Image url" required/>
      <button type="submit">+ Add Image</button>
      </form>
    )
  }
}
export default addFishForm;