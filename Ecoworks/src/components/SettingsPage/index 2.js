import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { settingsLessonUpdate } from '../../actions';

import {
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';

class SettingsPage extends React.Component {
  render() {
    console.log(this.props);

    return (
      <View>
        <Text>Do you want to switch to Spanish?</Text>
        <ToggleSwitch
          isOn={this.props.settings.language === 'english'}
          onColor='green'
          offColor='red'
          label={this.props.settings.language}
          labelStyle={{ color: 'black', fontWeight: '900' }}
          size='large'
          onToggle={() => {
            if (this.props.settings.language === 'english') {
              this.props.settingsLessonUpdate('spanish');
            } else {
              this.props.settingsLessonUpdate('english');
            }
          }}
        />
      </View>);
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

// { settings }
// { settings: settings }

export default connect(mapStateToProps, { settingsLessonUpdate })(SettingsPage);
