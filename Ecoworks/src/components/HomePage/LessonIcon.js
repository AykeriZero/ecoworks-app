import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../common';
import getImage from '../../pictures';

class LessonIcon extends React.Component {

  onIconPress() {
    switch (this.props.item.id) {
      case 1:
        Actions.lessonPage1();
        break;
      case 2:
        Actions.lessonPage2();
        break;
      case 3:
        Actions.lessonPage3();
        break;
      case 4:
        Actions.lessonPage4();
        break;
      case 5:
        Actions.lessonPage5();
        break;
      case 6:
        Actions.lessonPage6();
        break;
      case 7:
        Actions.lessonPage7();
        break;
      case 8:
        Actions.lessonPage8();
        break;
      default:
        Actions.lessonPage1();
    }
  }

    render() {
        return (
          <TouchableOpacity onPress={() => this.onIconPress()}>
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
          </TouchableOpacity>
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
