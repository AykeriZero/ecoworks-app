import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </CardSection>
      <CardSection>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = {
    cardSectionStyle: {
      justifyContent: 'center'
    },
    textStyle: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40,
      fontFamily: 'Archer-Medium'
    },
    containerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
    }
};

export { Confirm };
