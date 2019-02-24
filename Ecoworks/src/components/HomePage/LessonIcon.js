import React from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../common';
import getImage from '../../pictures';

class LessonIcon extends React.Component {

  onIconPress() {
    switch (this.props.item.id) {
      case 1:
        Actions.lessonPage1();
        break;
      case 4:
        Actions.lessonPage4();
        break;
      default:
        Actions.lessonPage1();
    }
  }

    render() {
        return (
          <TouchableWithoutFeedback onPress={() => this.onIconPress()}>
          {/* TouchableWithoutFeedback has a bug which does not allow it to
              wrap custom compononts */}
          <View>

          <Card>

          <CardSection>
            <Image
              source={getImage(this.props.item.img)}
              style={styles.imgStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.textStyle}>
              { this.props.item.title }
            </Text>
          </CardSection>

          </Card>

          </View>
          </TouchableWithoutFeedback>
        );
    }
}

const styles = {
  imgStyle: {
    height: 200,
    width: 200,
    resizeMode: 'stretch'
  },
  textStyle: {
    fontSize: 13,
    color: 'black',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  pictureStyle: {
    color: 'black',
  },
};
export default LessonIcon;
