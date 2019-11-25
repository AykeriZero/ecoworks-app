import React from 'react';

import {
    Text,
    View,
    FlatList
} from 'react-native';

import { CardSection, Card, TitleFont } from '../common';

import data from './resources.json';

class ResourcesPage extends React.Component {
    /* Display the main bills page */
    // function Resource({ item }) {
    Resource = ({ item }) => {
      return (
          <Card>

            <CardSection>
              <Text style={{fontWeight: "bold"}}> Agency:</Text>
              <Text> {item.agency} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}> Phone Number:</Text>
              <Text> {item.phone} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}> Website:</Text>
              <Text> {item.website} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}> Text:</Text>
              <Text> {item.comments} </Text>
            </CardSection>

            <Text>{'\n'}</Text>

          </Card>
      );
    }

    render() {
      return (
        <View>

        <Card>
          <CardSection>
              <TitleFont> Additional Resources </TitleFont>
          </CardSection>

        </Card>

        <FlatList
          data={data.resources}
          renderItem={this.Resource}
          keyExtractor={item => item.agency}
        />

        </View>
      );
  }
}

export default ResourcesPage;
