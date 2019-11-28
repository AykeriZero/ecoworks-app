import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { tabNavigatorUpdate } from '../../actions';

//import data from './Lessons.json';

import englishData from './Lessons.json';
import spanishData from './sp_Lessons.json';

import LessonsListItem from './LessonsListItem';

class LessonsPage extends Component {

  renderLessonsListItem = ({ item }) => {
    return (
      <LessonsListItem item={item} />
    );
  }

  render() {
    let data = englishData; // default to english
    switch(this.props.settings.language)
    {
      case "spanish":
          data = spanishData;
          break;
      default:
        data = englishData;
    }
    return (
      <FlatList
        data={data}
        renderItem={this.renderLessonsListItem}
        keyExtractor={(library) => library.id.toString()}
      />
     );
  }
}

const mapStateToProps = (state) => {
  return { settings: state.settings };
};

export default connect(mapStateToProps, { tabNavigatorUpdate })(LessonsPage);
