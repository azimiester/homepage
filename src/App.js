import React, { Component } from 'react';
import { Sidebar, Home, Blog, Contact } from './components';
import {links as mainLinks} from './statics/links';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar links={mainLinks} />
          <Router>
            <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/blog' component={Blog}/>
              </Switch>
            </main>
          </Router>
      </div>
    );
  }
}

export default App;
