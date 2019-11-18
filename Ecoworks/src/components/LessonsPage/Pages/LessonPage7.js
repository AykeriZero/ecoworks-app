import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';
import data from './en/en_Lesson7.json';

class LessonPage7 extends Component {

  render() {
    return (
      <ScrollView>

      <Card>
        <CardSection>
          <TitleFont>{data.description.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text>{data.description.title1}{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
        </CardSection>
        <CardSection>
          <Text>{data.description.title2}{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}</Text>
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

// export { LessonPage7 };

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage7);
