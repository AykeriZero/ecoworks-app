import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { tabNavigatorUpdate } from '../../actions';

import data from './Lessons.json';

import LessonsListItem from './LessonsListItem';

class LessonsPage extends Component {

  renderLessonsListItem = ({ item }) => {
    return (
      <LessonsListItem item={item} />
    );
  }

  render() {
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
