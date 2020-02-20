import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
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
            animationType={'slide'}
            transparent
            visible={this.state.showModal}
          >
          <TouchableWithoutFeedback
            onPress={() => this.setState({ showModal: false })}
            style={{ flex: 1 }}
          >
          <View style={styles.ModalSection}>
            <CardSection style={{ justifyContent: 'center', flexDirection: 'row' }}>
              {children}
            </CardSection>
          </View>
          </TouchableWithoutFeedback>
          </Modal>
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
  },
  ModalSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};


export default SettingsSection;
