import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

import {
    Text,
    View
} from 'react-native';

class SettingsPage extends React.Component {
  state = { isSwitchOn: true,
            language: 'english' }
  render() {
    return (
      <View>
        <Text>Do you want to switch to Spanish?</Text>
        <ToggleSwitch
          isOn={this.state.isSwitchOn}
          onColor='green'
          offColor='red'
          label={this.state.language}
          labelStyle={{ color: 'black', fontWeight: '900' }}
          size='large'
          onToggle={(isOn) => this.setState({ isSwitchOn: isOn, language: 'spanish' })}
        />
      </View>);
  }
}

export default SettingsPage;
