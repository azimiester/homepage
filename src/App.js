import React, { Component } from "react";
import { Sidebar, Home, Blog, Contact } from "./components";
import { Provider } from "react-redux";
import store from "./shared/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Provider store={store}>
            <div className="root">
              <Sidebar />
              <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/blog" component={Blog} />
                </Switch>
              </main>
            </div>
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App;
