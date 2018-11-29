import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import LessonsItem from './LessonsItem';

class LessonsPage extends Component {

  renderLessonsItem = () => {
    return (
      <LessonsItem />
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={this.renderLessonsItem}
        />
      </View>
    );
  }
}

export default LessonsPage;
