import React from 'react';

import {
    Text,
    View,
    FlatList
} from 'react-native';

import { CardSection, Card, TitleFont } from '../common';

import englishData from './resources.json';
import spanishData from './resources_spanish.json';

import { connect } from 'react-redux';

class ResourcesPage extends React.Component {
    /* Display the main bills page */
    // function Resource({ item }) {


    Resource = ({ item }) => {
      return (
          <Card>

            <CardSection>
              <Text style={{fontWeight: "bold"}}>{this.agency}:</Text>
              <Text> {item.agency} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}>{this.phone}:</Text>
              <Text> {item.phone} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}>{this.website}:</Text>
              <Text> {item.website} </Text>
            </CardSection>

            <CardSection>
              <Text style={{fontWeight: "bold"}}>{this.comment}:</Text>
              <Text> {item.comments} </Text>
            </CardSection>

            <Text>{'\n'}</Text>

          </Card>
      );
    }

    render() {
        let data = englishData;
        switch(this.props.settings.language)
        {
          case "spanish":
              data = spanishData;
              this.agency = "Agencia"
              this.phone = "Número de teléfono"
              this.website = "Sitio web"
              this.comment = "Comentarios"
              this.title = "Recursos Adicionales"
              break;
          default:
            data = data;
            this.agency = "Agency"
            this.phone = "Phone Number"
            this.website = "Website"
            this.comment = "Comments"
            this.title = "Additional Resources"
        }
      return (
        <View>

        <Card>
          <CardSection>
              <TitleFont> {this.title} </TitleFont>
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

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

// export default ResourcesPage;
export default connect(mapStateToProps, {})(ResourcesPage);
