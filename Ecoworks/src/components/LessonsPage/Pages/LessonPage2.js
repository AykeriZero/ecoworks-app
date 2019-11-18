import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';

import { connect } from 'react-redux';

import getImage from '../../../pictures';
import data from './en/en_Lesson2.json';

class LessonPage2 extends Component {

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
          <Text>{data.description.body1}</Text>
        </CardSection>

        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage(data.dollars_and_cents)}
            resizeMode={'contain'}
          />
        </CardSection>

      </Card>


      <Card>
        <CardSection>
          <Text>{data.description.body2}</Text>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage(data.energy_equation)}
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

// export { LessonPage2 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage2);
