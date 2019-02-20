import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardSection } from '../common';
import getImage from '../../pictures';

class LessonIcon extends React.Component {

    render() {
        return (
          <Card>

          <CardSection>
            <Image
              source={getImage(this.props.item.img)}
              style={styles.imgStyle}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.textStyle}>
              { this.props.item.title }
            </Text>
          </CardSection>

          </Card>
        );
    }
}

const styles = {
  imgStyle: {
    height: 200,
    width: 200,
    resizeMode: 'stretch'
  },
  textStyle: {
    fontSize: 13,
    color: 'black',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  pictureStyle: {
    color: 'black',
  },
};
export default LessonIcon;
