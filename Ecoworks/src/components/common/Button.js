<<<<<<< HEAD
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.buttonTextStyle}>{ children }</Text>
    </TouchableOpacity>
);

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Archer-Medium'
  }
};

export { Button };
=======
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <Text style={styles.buttonTextStyle}>{ children }</Text>
    </TouchableOpacity>
);

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Archer-Medium'
  }
};

export { Button };
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
