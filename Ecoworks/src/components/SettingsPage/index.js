import React from 'react';

import { connect } from 'react-redux';

import {
    Text,
    Picker,
    View,
    TouchableWithoutFeedback
} from 'react-native';

import { Card, CardSection } from '../common';
import { settingsLanguageUpdate } from '../../actions';

const ChangeSettingButton = ({ onPress, current_setting }) => (
  <TouchableWithoutFeedback>
  </TouchableWithoutFeedback>
);

class SettingsPage extends React.Component {

  render() {
    return (
      <View>
      <Card style={styles.settingStyle}>

      <CardSection style={{ alignItems: 'stretch', flex: 1 }}>
        <Text>Language</Text>

        {/*
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
        */}
        </CardSection>

        <CardSection>
          <Text>{this.props.settings.language}</Text>
        </CardSection>
      </Card>

      </View>);
  }
}

const styles = {
  settingStyle: {
    flexDirection: 'row'
  }
};

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { settingsLanguageUpdate })(SettingsPage);
