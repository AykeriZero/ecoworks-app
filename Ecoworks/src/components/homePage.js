import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import { Header, Checkbox } from './common';




class HomePage extends React.Component {
    /* Display home page */
    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = {checked0: false, checked1: false, checked2: false};
    }
    render() {
        return (
            <View>
                <View>
                    <Header headerText={"Home Page"}/>
                </View>
                <View>
                    <Text style={styles.textStyle}> Lessons </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollStyle}
                    >
                        {
                            // TODO: change image to a card component with picture of lesson and title of lesson}
                        }
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 150, height: 150}} />


                    </ScrollView>
                    <View style={styles.blackLine}></View>
                </View>
                <View>
                    <Text style={styles.textStyle}> Tasks </Text>
                    {
                        // TODO: DON'T USE CHECKBOX, USE SWITCH
                    }

                </View>

            </View>
        )

    }

}

//style of header
const styles = {
  viewStyle: {
    // backgroundColor: '#F9F9F8',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    color: 'black'

  },
  scrollStyle: {
    margin: 20,
  },
  blackLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    margin: 10
  }
};


export default HomePage;
