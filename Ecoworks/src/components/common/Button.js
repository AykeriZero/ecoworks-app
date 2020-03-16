import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

const Button = ({ customStyle, disabled, onPress, buttonLabel, category, children }) => {
  const img_dict = 
  {
    "Comfort": require("../../pictures/bed1.png"),
    "Health": require("../../pictures/cross1.png"),
    "Energy": require("../../pictures/lightbulb21.png"),
    "Savings": require("../../pictures/dollarsign1.png"),
    "Safety": require("../../pictures/hardhat1.png")

  }
  const icon = img_dict[category]
  
  return (
    <View style={{flexDirection:'row', flexWrap:'wrap', padding: 5}}>
      <Image
      source={icon}
      style={{height: 50, width: 50}}
      />
    <TouchableOpacity
      onPress={onPress}
      style={customStyle || styles.buttonStyle}
      disabled={disabled || false}
      
    >

      <Text style={styles.buttonTextStyle}>{ buttonLabel }</Text>

    </TouchableOpacity>
    </View>
);}

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    
  },

  buttonTextStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#228B22',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Archer-Medium'
  }
};

export { Button };
