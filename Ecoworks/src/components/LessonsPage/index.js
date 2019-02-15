import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { tabNavigatorUpdate } from '../../actions';

import data from './Lessons.json';

import { Card } from '../common';

import LessonsListItem from './LessonsListItem';

class LessonsPage extends Component {

  componentWillMount() {
    this.props.tabNavigatorUpdate('lessons');
  }

  renderLessonsListItem = ({ item }) => {
    return (
      <LessonsListItem item={item} />
    );
  }

  render() {
    return (
        <Card style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={this.renderLessonsListItem}
            keyExtractor={(library) => library.id.toString()}
          />
        </Card>
     );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { tabNavigatorUpdate })(LessonsPage);
