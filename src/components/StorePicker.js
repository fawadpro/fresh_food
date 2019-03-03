import React, { Component } from 'react';
import '../css/style.css';
import {getFunName} from './helpers';

class StorePicker extends Component {
    myInput=React.createRef();

    goToStore=event=>{
        // 1 - Stopping form from submitting
        event.preventDefault();

        // 2 - Get text value from the input
        const storeName=this.myInput.current.value;

        // 3- Sending to store/ Whatever-you-entered
        this.props.history.push(`/store/${storeName}`);

    }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Enter your store name </h2>
      <input name="store" placeholder="Enter Store" required defaultValue={getFunName()} ref={this.myInput}/>
      <button type="submit">Enter Store Name</button>
      </form>
    )
  }
}
export default StorePicker;