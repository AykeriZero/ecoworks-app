import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';
import { Card, CardSection } from '../common';

class SettingsSection extends React.Component {
  state = { showModal: false };

  render() {
    const { sectionText, sectionOption, children } = this.props;

    return (
      <View>

      <TouchableOpacity onPress={() => this.setState({ showModal: true })}>
      <Card style={styles.settingStyle}>
          <CardSection style={styles.SectionType}>
            <Text style={styles.settingTypeText}>{sectionText}</Text>
          </CardSection>

          <CardSection style={styles.SectionValue}>
            <Text>{sectionOption}</Text>
          </CardSection>

          <Modal
            visible={this.state.showModal}
          >{children}</Modal>
      </Card>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = {
  settingStyle: {
    flexDirection: 'row'
  },
  settingTypeText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  SectionType: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: 15
  },
  SectionValue: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 0,
    padding: 15
  }
};


export default SettingsSection;
