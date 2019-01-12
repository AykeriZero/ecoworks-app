import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
//import { connect } from 'react-redux';
import data from './Lessons.json';

import { Card } from '../common';

// Only displays the title right now, (add picture?)
import LessonsListItem from './LessonsListItem';

class LessonsPage extends Component {

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

export default LessonsPage;
