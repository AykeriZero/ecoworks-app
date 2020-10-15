//Checkbox component for easier styling

import React from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box'


const Checkbox = (props) => (
  <CheckBox
      isChecked={checked}
      onClick={() => checked = !checked}
      rightText={props.checkboxText}
      checkedCheckBoxColor="green"

  />
);

const checked = false;

export { Checkbox };
