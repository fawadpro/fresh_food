import React, { Component } from 'react'
import '../css/style.css'
import AddFishForm from './addFishForm';

class Inventory extends Component {
  render() {
    return (
      <div>
          <h1>Inventory</h1>
          <AddFishForm addFish={this.props.addFish}/>
          <button type="submit" onClick={this.props.loadSampleFish}>Load sample fishes</button>
      </div>
    )
  }
}

export default Inventory;