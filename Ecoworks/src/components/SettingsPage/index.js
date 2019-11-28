import React from 'react';
import { connect } from 'react-redux';
import { View, Picker } from 'react-native';

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
        />

        <SettingsSection
          sectionText={'Example Setting 1'}
          sectionOption={'Example Option'}
        />

        <SettingsSection
          sectionText={'Example Setting 2'}
          sectionOption={'Example Option'}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
