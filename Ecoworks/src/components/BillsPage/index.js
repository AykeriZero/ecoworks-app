import React from 'react';

import {
    Text,
    View,
} from 'react-native';

import { CardSection, Card, TitleFont } from '../common';

class BillsPage extends React.Component {
    /* Display the main bills page */

    render() {
      return (
        <View>

        <Card>
          <CardSection>
              <TitleFont> Bills </TitleFont>
          </CardSection>

        </Card>

        <Card>
          <CardSection>
              {
                  // TODO: DON'T USE CHECKBOX, USE SWITCH
              }
          </CardSection>
        </Card>

        </View>
      );
  }
}

export default BillsPage;
