import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';

import { connect } from 'react-redux';

import getImage from '../../../pictures';
// import data from './en/en_Lesson2.json';

import englishData from './en/en_Lesson2.json';
import spanishData from './sp/sp_Lesson2.json';
import ActionList from '../ActionList';


class LessonPage2 extends Component {

  render() {
    let data = englishData; // default to english
    switch(this.props.settings.language)
    {
      case "spanish":
          data = spanishData;
          break;
      default:
        data = englishData;
    }

    return (
      <ScrollView>

      <Card>
        <CardSection>
          <TitleFont style = {styles.textStyle}>{data.description.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text>{data.description.body}</Text>
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
          <Text style = {styles.textStyle}>{data.description.body2}</Text>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage(data.energy_equation)}
            resizeMode={'contain'}
          />
        </CardSection>
      </Card>
      <ActionList lesson="Lesson2"></ActionList>
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
  },
  textStyle: {
    fontFamily: 'Archer-Medium'
  },
};

// export { LessonPage2 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage2);
