import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../Pictures';
import data from './Lesson1.json';

class LessonPage1 extends Component {

  render() {
    return (
      <ScrollView>

      <Card>
        <CardSection style={styles.titleCardStyle}>
          <TitleFont>Lesson {this.props.lesson.id}: {this.props.lesson.title}</TitleFont>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <TitleFont>{data.description.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text>{data.description.body}</Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage(data.chess_image)}
            resizeMode={'contain'}
          />
        </CardSection>
      </Card>

      </ScrollView>
    );
  }

}

const styles = {
  titleCardStyle: {
    justifyContent: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default LessonPage1;