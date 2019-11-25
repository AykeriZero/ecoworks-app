// Todo list
import React from 'react';
import { View, Button } from 'react-native';
import data from './actionItems.json'
import AsyncStorage from '@react-native-community/async-storage';


class ActionList extends React.Component {
    constructor(props) {
        super(props);
        console.log("yeet")
        let key  = this.props.lesson;
        console.log(key);
        let actionItems = data[key].tasks;
        this.state = {actionItems: actionItems};
        this.addToList = this.addToList.bind(this);

    }

    addToList(id) {
            try {
               AsyncStorage.setItem('@actionList', '[]')
            } catch (e) {
              // saving error
            }
    }

    renderButtons() {
        return this.state.actionItems.map((item) => {
            return (
                <Button key={item.id} title={item.name} onPress={() => this.addToList(item.id)}></Button>
            );
        });
    }

    render() {
        console.log(this.state.actionItems);
        return (
            <View>
                {
                    this.renderButtons()
                }
            </View>

        );
    }
}
    export default ActionList;
