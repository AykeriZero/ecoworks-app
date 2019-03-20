import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <Router />
        </View>
      </Provider>
    );
  }

}

export default App;
