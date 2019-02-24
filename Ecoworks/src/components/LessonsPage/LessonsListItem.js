import React, { Component } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../common';
import getImage from '../../pictures';

class LessonListItem extends Component {

  onRowPress() {
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
      default:
        Actions.lessonPage1();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress()}>
        <View>
          <Card>

            <CardSection>
              <Text style={styles.titleStyle}>
                {this.props.item.title}
              </Text>
            </CardSection>

            <CardSection>
              <Image
                style={styles.imageStyle}
                source={getImage(this.props.item.img)}
                resizeMode={'contain'}
              />
            </CardSection>

          </Card>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default LessonListItem;
