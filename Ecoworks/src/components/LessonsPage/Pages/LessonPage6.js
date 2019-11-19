import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';

import { connect } from 'react-redux';

import { Card, CardSection, TitleFont } from '../../common';
// import data from './en/en_Lesson6.json';

import englishData from './en/en_Lesson6.json';
import spanishData from './sp/sp_Lesson6.json';

//const Furnace_img = require('./Furnace.png');
import getImage from '../../../pictures';

class LessonPage6 extends Component {
  render() {
    let data = englishData; // default to english
    if (true) {
        data = spanishData;
    }
    return (
      <ScrollView>
        <Card>
        <CardSection>
        <TitleFont>{data.description.title}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body1}{data.description.body2}{data.description.body3}{data.description.body4}</Text>
        </CardSection>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={getImage(data.drafty_window)}
        resizeMode={'contain'}
        />
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
        source={getImage(data.drafty_door)}
        resizeMode={'contain'}
        />
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title3}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body8}{data.description.body9}</Text>
        </CardSection>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={getImage(data.electricity_saving)}
        resizeMode={'contain'}
        />
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title4}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body16}{data.description.body17}</Text>
        </CardSection>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={getImage(data.water_saving)}
        resizeMode={'contain'}
        />
        </CardSection>
        </Card>

        <Card>
        <CardSection>
        <TitleFont>{data.description.title5}</TitleFont>
        </CardSection>
        <CardSection>
        <Text>{data.description.body19}{data.description.body20}{data.description.body21}{data.description.body22}</Text>
        </CardSection>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={getImage(data.more_energy_saving_materials)}
        resizeMode={'contain'}
        />
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


// export { LessonPage6 };
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(LessonPage6);
