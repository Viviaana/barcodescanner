import React, { Component } from 'react';
import { Scanner } from './app/views/Scanner.js';
import {Provider} from 'react-redux'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Scanner/>
      </Provider>
    );
  }
}

export default App;



