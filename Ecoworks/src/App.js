import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './Router';
import TabNavigator from './components/TabNavigator';

class App extends Component {

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }} >
          <Router />
          <TabNavigator />
        </View>
      </Provider>
    );
  }

}

export default App;
