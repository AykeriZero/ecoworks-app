<<<<<<< HEAD
import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';

import englishData from './en/en_Lesson8.json';
import spanishData from './sp/sp_Lesson8.json';

class LessonPage8 extends Component {

    render() {
    console.log(this.props.settings);
      let data = englishData; // default to english

      switch(this.props.settings.language) {
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
                <TitleFont style = {styles.textStyle} >{data.description.title}</TitleFont>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title2}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.title1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title3}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title4}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body9}{data.description.body10}{data.description.body11}{data.description.body12}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title5}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body13}{data.description.body14}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title6}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body15}{data.description.body16}</Text>
                <CardSection>
                  <Image
                    style={styles.imageStyle}
                    source={getImage(data.Light_img)}
                    resizeMode={'contain'}
                  />
                  </CardSection>
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

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage8);
=======
import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';

import englishData from './en/en_Lesson8.json';
import spanishData from './sp/sp_Lesson8.json';

class LessonPage8 extends Component {

    render() {
    console.log(this.props.settings);
      let data = englishData; // default to english

      switch(this.props.settings.language) {
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
                <TitleFont style = {styles.textStyle} >{data.description.title}</TitleFont>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title2}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.title1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title3}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title4}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body9}{data.description.body10}{data.description.body11}{data.description.body12}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title5}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body13}{data.description.body14}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont style = {styles.textStyle}>{data.description.title6}</TitleFont>
                </CardSection>
                <CardSection>
                <Text style = {styles.textStyle}>{data.description.body15}{data.description.body16}</Text>
                <CardSection>
                  <Image
                    style={styles.imageStyle}
                    source={getImage(data.Light_img)}
                    resizeMode={'contain'}
                  />
                  </CardSection>
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

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage8);
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
