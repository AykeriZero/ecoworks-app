import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { Card, CardSection, TitleFont } from '../../common';
import data from './Lesson4.json';

import getImage2 from '../Pictures';

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
                <CardSection>
                <Image
                style={styles.imageStyle}
                source={getImage2(data.Furnace_img)}
                resizeMode={'contain'}
                />
                </CardSection>
            </Card>

        <Card>
            <CardSection>
                <TitleFont>{data.description.title3}</TitleFont>
            </CardSection>
            <CardSection>
                <Text>{data.description.body8}{data.description.body9}{data.description.body10}{data.description.body11}{data.description.body12}{data.description.body13}{data.description.body14}{data.description.body15}</Text>
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
