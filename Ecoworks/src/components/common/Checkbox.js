//Checkbox.js
//Checkbox component for easier styling

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import store from '../../store';
import { TaskRemove } from '../../actions/TaskAction';

class CustomCheckBox extends React.Component {
  constructor(props) {
      super(props);
      this.state = { };
  }
  
  render() {
    const labelStyle = {
      fontSize: 10,
      color: 'black'
    };
    const labelStyle2 = {
      fontSize: 10,
      color: 'white'
    };
      return (
          <View>
          <CheckBox
              style={{ flex: 1, padding: 20 }}
              onClick={() => {
                  const action = TaskRemove(store.getState().taskList.arr, this.props.id);
                  store.dispatch(action);
              }}
              isChecked={false}
              rightText={this.props.text}
              rightTextStyle={labelStyle}
          />
          <Text style={labelStyle2}>{this.props.text}</Text>
          </View>
          );
      }
  }

  CustomCheckBox.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };
  export default CustomCheckBox;
