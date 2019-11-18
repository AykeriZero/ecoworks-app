import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';
import data from './en/en_Lesson1.json';

import { connect } from 'react-redux';

class LessonPage1 extends Component {

  render() {
    let data = englishData; // default to english
    if (true) {
        data = spanishData;
    }
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

// export { LessonPage1 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage1);
