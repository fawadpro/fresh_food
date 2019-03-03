import React, { Component } from 'react'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';
class Routers extends Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component= {StorePicker}/>
              <Route path="/store/:id" component = {App}/>
              <Route component={NotFound}/>
          </Switch>
      </Router>
    )
  }
}

export default Routers;