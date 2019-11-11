import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './Router';

class App2 extends Component {

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <Router />
        </View>
      </Provider>
    );
  }

}

export default App2;
