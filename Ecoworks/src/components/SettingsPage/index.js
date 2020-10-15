<<<<<<< HEAD
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
              <Picker.Item style = {styles.textStyle} label="English" value="english" />
              <Picker.Item style = {styles.textStyle} label="Spanish" value="spanish" />
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
const styles = {
textStyle: {
  fontFamily: 'Archer-Medium'
}
};
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
=======
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
              <Picker.Item style = {styles.textStyle} label="English" value="english" />
              <Picker.Item style = {styles.textStyle} label="Spanish" value="spanish" />
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
const styles = {
textStyle: {
  fontFamily: 'Archer-Medium'
}
};
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
