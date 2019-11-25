import React from 'react';

import { connect } from 'react-redux';

import {
    Text,
    View,
    Picker
} from 'react-native';

import { settingsLanguageUpdate } from '../../actions';

class SettingsPage extends React.Component {

  state = { isSwitchOn: true,
            language: 'english' }

  render() {
    return (
      <View>
        <Text>Do you want to switch to Spanish?</Text>

        <Picker
          selectedValue={this.props.settings.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue) =>
              this.props.settingsLanguageUpdate(itemValue)
            }
        >
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Spanish" value="spanish" />
        </Picker>
      </View>);
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
