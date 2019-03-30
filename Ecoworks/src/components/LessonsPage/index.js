import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { tabNavigatorUpdate } from '../../actions';

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
      if (true) {
          data = spanishData;
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

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { tabNavigatorUpdate })(LessonsPage);
