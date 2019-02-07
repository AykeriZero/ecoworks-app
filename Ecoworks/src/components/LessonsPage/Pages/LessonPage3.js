import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
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
