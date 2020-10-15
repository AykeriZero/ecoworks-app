<<<<<<< HEAD
import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
// import data from './en/en_Lesson5.json';

import englishData from './en/en_Lesson5.json';
import spanishData from './sp/sp_Lesson5.json';

//const Furnace_img = require('./Furnace.png');
import getImage from '../../../pictures';
import ActionList from '../ActionList';


class LessonPage5 extends Component {

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
                <Text style = {styles.textStyle}>{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title2}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}{data.description.body9}{data.description.body10}</Text>
                </CardSection>
                <CardSection>
                  <Image
                    style={styles.imageStyle}
                    source={getImage(data.Toilet_img)}
                    resizeMode={'contain'}
                  />
                  </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title3}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body11}{data.description.body12}{data.description.body13}{data.description.body14}</Text>
                </CardSection>
                </Card>
                <Card>
                <CardSection>
                  <Text style = {styles.textStyle}> Add to your Action List: </Text>
                </CardSection>
                <CardSection> 
                  <ActionList lesson="Lesson5"></ActionList>
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


// export { LessonPage5 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage5);
=======
import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
// import data from './en/en_Lesson5.json';

import englishData from './en/en_Lesson5.json';
import spanishData from './sp/sp_Lesson5.json';

//const Furnace_img = require('./Furnace.png');
import getImage from '../../../pictures';
import ActionList from '../ActionList';


class LessonPage5 extends Component {

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
                <Text style = {styles.textStyle}>{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title2}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}{data.description.body9}{data.description.body10}</Text>
                </CardSection>
                <CardSection>
                  <Image
                    style={styles.imageStyle}
                    source={getImage(data.Toilet_img)}
                    resizeMode={'contain'}
                  />
                  </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title3}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body11}{data.description.body12}{data.description.body13}{data.description.body14}</Text>
                </CardSection>
                </Card>
                <Card>
                <CardSection>
                  <Text style = {styles.textStyle}> Add to your Action List: </Text>
                </CardSection>
                <CardSection> 
                  <ActionList lesson="Lesson5"></ActionList>
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


// export { LessonPage5 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage5);
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
