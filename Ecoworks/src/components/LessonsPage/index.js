import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import data from './Lessons.json';

import { Card } from '../common';

import LessonsItem from './LessonsListItem';

class LessonsPage extends Component {

  renderLessonsItem = ({ item }) => {
    return (
      <LessonsItem item={item} />
    );
  }

  render() {
    return (
        <Card style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={this.renderLessonsItem}
            keyExtractor={(library) => library.id.toString()}
          />
        </Card>
    );
  }
}


export default LessonsPage;
