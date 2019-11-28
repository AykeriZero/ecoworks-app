import React from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text } from 'react-native';

import { settingsLanguageUpdate } from '../../actions';
import SettingsSection from './SettingsSection';

class SettingsPage extends React.Component {
  getHumanText(key) {
    switch (key) {
      case 'english':
        return 'English';
      case 'spanish':
        return 'Spanish';
      default:
        return 'Error';
    }
  }

  render() {
    return (
      <View>
        <SettingsSection
          sectionText={'Language'}
          sectionOption={this.getHumanText(this.props.settings.language)}
        >
          <Picker
            selectedValue={this.props.settings.language}
            style={{ height: 300, flex: 1}}
            onValueChange={(itemValue) =>
                this.props.settingsLanguageUpdate(itemValue)
              }
          >
              <Picker.Item label="English" value="english" />
              <Picker.Item label="Spanish" value="spanish" />
            </Picker>
        </SettingsSection>


        <SettingsSection
          sectionText={'Example Setting 1'}
          sectionOption={'Example Option'}
        >
          <Text> Example </Text>
        </SettingsSection>

        <SettingsSection
          sectionText={'Example Setting 2'}
          sectionOption={'Example Option'}
        >
          <Text> Example </Text>
        </SettingsSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
