import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont, Button } from '../../common';
import getImage from '../../../pictures';
// import data from './en/en_Lesson1.json';

import englishData from './en/en_Lesson1.json';
import spanishData from './sp/sp_Lesson1.json';
import { connect } from 'react-redux';
import ActionList from '../ActionList';


class LessonPage1 extends Component {

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
    // if (true) {
    //     data = spanishData;
    // }
    return (
      <ScrollView>

      <Card>
        <CardSection>
          <TitleFont style = {styles.textStyle} >{data.description.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text style = {styles.textStyle}>{data.description.body}</Text>
        </CardSection>
        <CardSection>
          <Text>{data.description.body2}</Text>
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
          <Text style = {styles.textStyle}> Add to your Action List: </Text>
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
  textStyle: {
    fontFamily: 'Archer-Medium'
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
