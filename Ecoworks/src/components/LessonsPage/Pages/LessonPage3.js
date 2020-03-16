import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';

import { connect } from 'react-redux';

import getImage from '../../../pictures';
// import data from './en/en_Lesson3.json';
import englishData from './en/en_Lesson3.json';
import spanishData from './sp/sp_Lesson3.json';
import ActionList from '../ActionList';


class LessonPage3 extends Component {

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
          <Text style = {styles.textStyle}>{data.description.reasons}</Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <TitleFont style = {styles.textStyle}>{data.description.seal_leak.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text style = {styles.textStyle}>{data.description.seal_leak.fixes}</Text>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={getImage(data.airLeak_image)}
            resizeMode={'contain'}
          />
          </CardSection>
      </Card>


      <Card>
        <CardSection>
          <TitleFont style = {styles.textStyle}>{data.description.test_leak.title}</TitleFont>
        </CardSection>
        <CardSection>
          <Text style = {styles.textStyle}>{data.description.test_leak.tests}</Text>
        </CardSection>
      </Card>

      <Card>
        <CardSection>
          <Text style = {styles.textStyle}> Add to your Action List: </Text>
        </CardSection>
        <CardSection> 
          <ActionList lesson="Lesson3"></ActionList>
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
  },
  textStyle: {
    fontFamily: 'Archer-Medium'
  }
};

// export { LessonPage3 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage3);
