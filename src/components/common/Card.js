//Card component for easier styling

import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7,
    marginBottom: 2,
    padding: 10
  }
};

export { Card };
