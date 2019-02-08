import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Checkbox } from './common';


class LessonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={ styles.viewStyle }>
                <View>
                    <Text style={styles.textStyle}>
                        { this.props.title }
                    </Text>
                </View>

                <View>
                    <Image source={{uri:  this.props.image , width: 100, height: 100}} />
                </View>
            </View>
        )
    }



};

const styles = {
    textStyle: {
      fontSize: 20,
      color: 'black',
      alignItems: 'center',
      fontWeight: 'bold'
    },
    pictureStyle: {
      color: 'black',
    },
    viewStyle: {
      padding: 10,
    },
};
export default LessonIcon;
