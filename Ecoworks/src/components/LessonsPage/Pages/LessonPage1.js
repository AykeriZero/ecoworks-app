import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont, Button } from '../../common';
import getImage from '../../../pictures';
import data from './Lesson1.json';
import ActionList from '../ActionList';


class LessonPage1 extends Component {

  render() {
    return (
      <ScrollView>

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
      <Card>
        <CardSection>
          <Text> Add to your Action List: </Text>
        </CardSection>
        <CardSection> 
          <ActionList lesson="Lesson1"></ActionList>
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

export { LessonPage1 };
