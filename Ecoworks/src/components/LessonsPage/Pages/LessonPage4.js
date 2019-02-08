import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
import data from './Lesson4.json';

//const Furnace_img = require('./Furnace.png');

class LessonPage4 extends Component {

    render() {
        return (
        <ScrollView>

        <Card>
            <CardSection style={styles.titleCardStyle}>
                <TitleFont>Lesson {this.props.lesson.id}:
                    {this.props.lesson.title}</TitleFont>
            </CardSection>
        </Card>

        <Card>
            <CardSection>
                <TitleFont>{data.description.title}</TitleFont>
            </CardSection>
            <CardSection>
                <Text>{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
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
                <Text>{data.description.body8}{data.description.body9}</Text>
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


export default LessonPage4;