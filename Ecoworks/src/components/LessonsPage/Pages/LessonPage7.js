import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';

import englishData from './en/en_Lesson7.json';
import spanishData from './sp/sp_Lesson7.json';


import ZoomableImage from './react-native-interactive-image.js';

class LessonPage7 extends Component {

  render() {
      const annotations = [
	{
		x1: 25,
		x2: 35,
		y1: 20,
		y2: 30,
		description: 'A pair of black running sports shoes, has lace-up detail. Textile and mesh upper',
	},
	{
		x1: 60,
		x2: 70,
		y1: 15,
		y2: 25,
		description: 'Shoe sole tip!',
	},
	{
		x1: 20,
		x2: 30,
		y1: 50,
		y2: 60,
		description: 'Textured and patterned outsole',
	},
	{
		x1: 65,
		x2: 75,
		y1: 65,
		y2: 75,
		description: 'Textured outsole with a stacked heel',
	},
]
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
      // <View>
      //
      // <Card>
      //   <CardSection>
      //     <TitleFont>{data.description.title}</TitleFont>
      //   </CardSection>
      //   <CardSection>
      //     <Text>{data.description.title1}{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
      //   </CardSection>
      //   <CardSection>
      //     <Text>{data.description.title2}{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}</Text>
      //   </CardSection>
      // </Card>
      //
      //
      //
      //
      <ZoomableImage
					source={ require('./bill_1.png') }
					imageHeight={ 600 }
					imageWidth={ 450 }
					annotations={ annotations }
					popOverStyles={ { backgroundColor: 'white' } }
      />

      // <ZoomableImage
		// 			source={ require('./bill_2.png') }
		// 			imageHeight={ 600 }
		// 			imageWidth={ 450 }
		// 			annotations={ annotations }
		// 			popOverStyles={ { backgroundColor: 'white' } }
      // />

      // </View>
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
