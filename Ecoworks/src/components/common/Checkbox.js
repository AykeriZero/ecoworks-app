//Checkbox component for easier styling

import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box';


class CustomCheckBox extends React.Component {
  constructor(props) {
      super(props);
      this.state = { isChecked: false };
  }
  
  render() {
    const labelStyle = {
      textDecorationLine: this.state.isChecked ? 'line-through' : 'none',
      fontSize: 20,
      color: 'black'
    };
      return (
          <View>
          <CheckBox
              style={{ flex: 1, padding: 20 }}
              onClick={() => {
                toggleTodo(todo.id)}
                  this.setState({
                      isChecked: !this.state.isChecked
                  });
              }}
              isChecked={this.state.isChecked}
              rightText={this.props.text}
              rightTextStyle={labelStyle}
          />

          </View>
          );
      }
  }
  CustomCheckBox.propTypes = {
    text: PropTypes.string.isRequired,
  };
  export default CustomCheckBox;
