import React from 'react';

import {
    Text,
    View,
    FlatList
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';


import { CardSection, Card, TitleFont } from '../common';

import englishData from './resources.json';
import spanishData from './resources_spanish.json';
import gasData from './gas_elec.json';
import healthData from './health_safety.json';
import waterData from './water.json';
import gasDataSpanish from './gas_elec_spanish.json';
import healthDataSpanish from './health_safety_spanish.json';
import waterDataSpanish from './water_spanish.json';
import ResourceListItem from './ResourceListItem.js';

import { connect } from 'react-redux';


select() {
  if (this.state.selected === "gas_elec") {
       return(<ResourceListItem resourcetype = {"gas/elec"}/>);
  }
  else if (this.state.selected === "health_safety") {
        return (<ResourceListItem resourcetype = {"health_safety"}/>);
  }
  else if (this.state.selected === "water") {
        return (<ResourceListItem resourcetype = {"water"}/>);
  }

}
  render() {      
     return (
        <View>

        <TouchableOpacity onPress={this.setState({selected: "gas_elec"})}>
        <Card>
        <CardSection> <Text> Gas and Electricity </Text>
        </CardSection>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.setState({selected: "health_safety"})}>
        <Card>
        <CardSection> <Text> Health and Safety </Text>
        </CardSection>
        </Card>
         </TouchableOpacity>

        <TouchableOpacity onPress={this.setState({selected: "water"})}>
        <Card>
        <CardSection> <Text> Water </Text>
        </CardSection>
        </Card>
        </TouchableOpacity>

        {this.select()}
        </View>
      );
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

// export default ResourcesPage;
export default connect(mapStateToProps, {})(ResourcesPage);
