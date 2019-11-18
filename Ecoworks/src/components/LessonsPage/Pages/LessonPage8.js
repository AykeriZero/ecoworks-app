import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
import getImage from '../../../pictures';

import englishData from './en/en_Lesson8.json';
import spanishData from './sp/sp_Lesson8.json';

class LessonPage8 extends Component {

    render() {
        let data = englishData; // default to english
        if (false) {
            data = spanishData;
        }

        return (
          <ScrollView>

                <Card>
                <CardSection>
                <TitleFont>{data.description.title}</TitleFont>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont>{data.description.title2}</TitleFont>
                </CardSection>
                <CardSection>
                <Text>{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
                </CardSection>
                </Card>


                <Card>
                <CardSection>
                <TitleFont>{data.description.title3}</TitleFont>
                </CardSection>
                <CardSection>
                <Text>{data.description.body5}{data.description.body6}{data.description.body7}{data.description.body8}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont>{data.description.title4}</TitleFont>
                </CardSection>
                <CardSection>
                <Text>{data.description.body9}{data.description.body10}{data.description.body11}{data.description.body12}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont>{data.description.title5}</TitleFont>
                </CardSection>
                <CardSection>
                <Text>{data.description.body13}{data.description.body14}</Text>
                </CardSection>
                </Card>

                <Card>
                <CardSection>
                <TitleFont>{data.description.title6}</TitleFont>
                </CardSection>
                <CardSection>
                <Text>{data.description.body15}{data.description.body16}</Text>
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
}
};

const mapStateToPros = (state) => {
  return {settings: state.settings};
}
export { LessonPage8 };
