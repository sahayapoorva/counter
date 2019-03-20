import React, { Component } from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux'
import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Counter/>
        </Provider>
      </div>
    );
  }
}

export default App;
