import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

import {
    Text,
    View
} from 'react-native';

class SettingsPage extends React.Component {
  state = { language: 'english' }

  
  render() {
    return (
      <View>
        <Text>Do you want to switch to Spanish?</Text>
        <ToggleSwitch
          isOn={this.state.language === 'english'}
          onColor='green'
          offColor='red'
          label={this.state.language}
          labelStyle={{ color: 'black', fontWeight: '900' }}
          size='large'
          onToggle={() => this.setState((prevstate) => {
          if (prevstate.language === 'english') {
            return { language: 'spanish' };
          }
          return { language: 'english' };
          })}
        />
      </View>);
  }
}

export default SettingsPage;
