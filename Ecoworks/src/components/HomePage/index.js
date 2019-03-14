import React from 'react';

import {
    Text,
    View,
    FlatList
} from 'react-native';

import { CardSection, Card } from '../common';
import LessonIcon from './LessonIcon';
import LessonData from '../LessonsPage/Lessons';

class HomePage extends React.Component {
    /* Display home page */

    constructor(props) {
        // Initialize mutable state
        super(props);
        this.state = { checked0: false, checked1: false, checked2: false };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    renderLessonsListItem = ({ item }) => {
      return (
        <LessonIcon item={item} />
      );
    }

    handleSubmit() {
      if (this.state.text !== '') {
        const action = TaskAdd(store.getState().taskList.arr, this.state.text);
        store.dispatch(action);
      }

    render() {
      return (
        <View>
        <Card>
          <CardSection>
              <Text style={styles.textStyle}> Lessons </Text>
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
          <TodoList />
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                     onChangeText={(text) => this.setState({text})}
                     value={this.state.text}
                    />
                    <TouchableOpacity
                    onPress={this.handleSubmit}
                    style={styles.buttonStyle}
                    >
                    <Text> Submit </Text>
                    </TouchableOpacity>
          </CardSection>
        </Card>

        </View>
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
    color: 'black'
  },
  scrollStyle: {
    margin: 20,
  },
  blackLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    margin: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 10,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};


export default HomePage;
