import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
import data from './en/en_Lesson6.json';

//const Furnace_img = require('./Furnace.png');
import getImage from '../../../pictures';

class LessonPage6 extends Component {
  render() {
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
        <Text>{data.description.body5}{data.description.body6}{data.description.body7}</Text>
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title3}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body8}{data.description.body8}</Text>
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title4}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body10}{data.description.body11}</Text>
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title5}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body19}{data.description.body20}{data.description.body21}{data.description.body22}</Text>
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


export { LessonPage6 };
