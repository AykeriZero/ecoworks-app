// Todo list
import React from 'react';
import { View, Button } from 'react-native';
import data from './actionItems.json'


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

    }

    renderButtons() {
        return this.state.actionItems.map((item) => {
            return (
                <Button key={item.id} title={item.name} onPress={() => addToList(item.id)}></Button>
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
