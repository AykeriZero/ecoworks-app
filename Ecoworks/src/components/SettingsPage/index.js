import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

// import {
//     Text
// } from 'react-native';

class SettingsPage extends React.Component {
  render() {
    return (<ToggleSwitch
        isOn
        onColor='green'
        offColor='red'
        label='English'
        labelStyle={{ color: 'black', fontWeight: '900' }}
        size='large'
        onToggle={(isOn) => console.log('changed to : ', isOn)}
    />);
  }
}

export default SettingsPage;
