import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';

import getImage3 from '../Pictures';
import data from './Lesson3.json';


class LessonPage3 extends Component {

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
          <Text>{data.description.reasons}</Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <TitleFont>{data.description.seal_leak.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text>{data.description.seal_leak.fixes}</Text>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage3(data.airLeak_image)}
            resizeMode={'contain'}
          />
          </CardSection>
      </Card>



      <Card>
        <CardSection>
          <TitleFont>{data.description.test_leak.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text>{data.description.test_leak.tests}</Text>
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

export default LessonPage3;
