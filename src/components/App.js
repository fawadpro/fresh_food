import React, { Component } from 'react';
import Header from './Header';
import Order from './Orders';
import Inventory from './Inventory';
import '../css/style.css';
import loadSampleFish from './sample-fishes';
import Fish from './Fish';

 class App extends Component {
     state= {
         fishes : {},
         order : {}
     }

     addFish=fish=> {
         // 1- Copy the obj of state
         const fishes = {...this.state.fishes}

         // 2- Add new to that obj
         fishes[`fish${Date.now()}`]=fish;

         // 3- Update the state with new copy obj
         this.setState({fishes:fishes})

     }

     loadSampleFish = () => {
         // Load the sample Fish
         this.setState({
             fishes:loadSampleFish
         })
     };

     addToOrder=key=>{
         // Copy the state of object
         const order = {...this.state.order}

         // Update or Add the fish to cart
         order[key]=order[key]+1 || 1

         // update the state
         this.setState({
             order
         })
     }
  render() {
    return (
      <div className="catch-of-the-day">
      <div className="menu">
      <Header tagline="Daily Fresh Food"/>
      <ul className="fishes">
      {Object.keys(this.state.fishes).map(key=><Fish  index={key} key={key} detail={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
      </ul>
      </div>
      <Order />
      <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
      </div>
    )
  }
}
export default App;