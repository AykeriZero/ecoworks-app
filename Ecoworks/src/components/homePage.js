import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';

class HomePage extends React.Component {
    /* Display home page */
    constructor(props) {
        // Initialize mutable state
        super(props);
    }
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Home Page
                    </Text>
                </View>
                <View>
                    <Text> Lessons </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />
                        <Image source={{uri: "https://vignette.wikia.nocookie.net/king-harkinian/images/7/76/Taco-bell-logo.jpeg/revision/latest?cb=20151121220420", width: 100, height: 100}} />



                    </ScrollView>
                </View>
            </View>
        )

    }

}
export default HomePage;
