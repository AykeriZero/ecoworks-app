import React from 'react';
import { Text } from 'react-native';

const TitleFont = ({ children }) => (
  <Text style={styles.fontStyle}>{ children }</Text>
);

const styles = {
  fontStyle: {
    fontSize: 20
  }
};

export { TitleFont };
