<<<<<<< HEAD
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style = {styles.textStyle} style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle: {
    fontFamily: 'Archer-Medium'
  }
};

export { CardSection };
=======
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style = {styles.textStyle} style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle: {
    fontFamily: 'Archer-Medium'
  }
};

export { CardSection };
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
