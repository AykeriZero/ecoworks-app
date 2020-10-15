<<<<<<< HEAD
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
              <Text style = {styles.textStyle} >{this.agency}:</Text>
              <Text style = {styles.textStyle2}> {item.agency} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.phone}:</Text>
              <Text style = {styles.textStyle2}  > {item.phone} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.website}:</Text>
              <Text style = {styles.textStyle2}> {item.website} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.comment}:</Text>
              <Text style = {styles.textStyle2}> {item.comments} </Text>
            </CardSection>

            <Text style = {styles.textStyle}>{'\n'}</Text>

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
              <TitleFont style = {styles.textStyle}> {this.title} </TitleFont>
          </CardSection>

        </Card>

        <FlatList
          style = {styles.textStyle}
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
const styles = {
textStyle: {
  fontFamily: 'Archer-Medium',
  fontWeight: 'bold'
},
textStyle2: {
  fontFamily: 'Archer-Medium'
}
};
// export default ResourcesPage;
export default connect(mapStateToProps, {})(ResourcesPage);
=======
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
              <Text style = {styles.textStyle} >{this.agency}:</Text>
              <Text style = {styles.textStyle2}> {item.agency} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.phone}:</Text>
              <Text style = {styles.textStyle2}  > {item.phone} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.website}:</Text>
              <Text style = {styles.textStyle2}> {item.website} </Text>
            </CardSection>

            <CardSection>
              <Text style = {styles.textStyle} >{this.comment}:</Text>
              <Text style = {styles.textStyle2}> {item.comments} </Text>
            </CardSection>

            <Text style = {styles.textStyle}>{'\n'}</Text>

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
              <TitleFont style = {styles.textStyle}> {this.title} </TitleFont>
          </CardSection>

        </Card>

        <FlatList
          style = {styles.textStyle}
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
const styles = {
textStyle: {
  fontFamily: 'Archer-Medium',
  fontWeight: 'bold'
},
textStyle2: {
  fontFamily: 'Archer-Medium'
}
};
// export default ResourcesPage;
export default connect(mapStateToProps, {})(ResourcesPage);
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
