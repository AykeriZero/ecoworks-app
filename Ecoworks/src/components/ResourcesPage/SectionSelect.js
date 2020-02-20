import React from 'react';

import {
    Text,
    View,
    FlatList
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

import { connect } from 'react-redux';


select() {
  if (this.state.selected === "gas/elec") {
       return(<ResourceListItem resourcetype = {"gas/elec"}/>);
  }
  else if (this.state.selected === "health/safety") {
        return (<ResourceListItem resourcetype = {"health/safety"}/>);
  }
  else if (this.state.selected === "water") {
        return (<ResourceListItem resourcetype = {"water"}/>);
  }

}
  render() {      
     return (
        <View>
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
