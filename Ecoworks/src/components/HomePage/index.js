import React from 'react';
import { connect } from 'react-redux';

import {
    Text,
    ScrollView,
    FlatList
} from 'react-native';

import { CardSection, Card } from '../common';
import LessonIcon from './LessonIcon';
//import LessonData from '../LessonsPage/Lessons';
import englishData from '../LessonsPage/Lessons';
import spanishData from '../LessonsPage/sp_Lessons';
import ActionList from '../LessonsPage/ActionList';

class HomePage extends React.Component {
    /* Display home page */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { checked0: false, checked1: false, checked2: false };
    }

    renderLessonsListItem = ({ item }) => {
      return (
        <LessonIcon item={item} />
      );
    }

    render() {
      let LessonData = englishData; // default to english
      switch(this.props.settings.language)
      {
        case "spanish":
            LessonData = spanishData;
            break;
        default:
          LessonData = englishData;
      }
      return (
        <ScrollView>
        <Card>
          <CardSection style={{ justifyContent: 'center' }}>
              <Text style={styles.textStyle}>EcoWorkbook</Text>
          </CardSection>

          <CardSection>
              <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ flex: 1 }}
                  data={LessonData}
                  renderItem={this.renderLessonsListItem}
                  keyExtractor={(library) => library.id.toString()}
              />

          </CardSection>
        </Card>

        <Card>
          <CardSection>
        <ActionList lesson="Home" />
          </CardSection>
        </Card>

        </ScrollView>
      );
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
    color: 'black',
    fontFamily: "Archer-Medium"
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
const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, {})(HomePage);
