import React from 'react';
import { SafeAreaView, Text, TouchableWithoutFeedback } from 'react-native';

const TabIcon = (prop) => {
  const { onPress, focused } = prop;
  const page = "hello";
  console.log(prop);

  if (focused) {
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        style={styles.buttonStyle}
      >
        <SafeAreaView style={styles.selected}>
          <Text style={styles.buttonTextStyle}>{ page }</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={styles.buttonStyle}
    >
      <SafeAreaView>
        <Text style={styles.buttonTextStyle}>{ page }</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  selected: {
    backgroundColor: 'green',
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
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
    paddingBottom: 10
  }
};

export { TabIcon };
