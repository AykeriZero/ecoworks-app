// Todo list
import React from 'react';
import { View } from 'react-native';
import data from './actionItems.json'
import AsyncStorage from '@react-native-community/async-storage';
import {TaskAction} from '../../actions';
import {connect} from 'react-redux';
import { Button } from '../common/Button';

class ActionList extends React.Component {
    constructor(props) {
        super(props);
        let key  = this.props.lesson;
        if (key !== "Home") {
            let actionItems = data[key].tasks;
            this.state = {actionItems: actionItems};
        }
        else {
            this.state = {actionItems: []};
        }
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
    }

    async componentDidMount() {
        console.log(TaskAction);
        if (this.props.lesson === "Home") {
            console.log(this.props);
            console.log(this.props.actionItems.actionItems.length);
            if (this.props.actionItems.actionItems.length === 0) {
                let list = await AsyncStorage.getItem('@actionList');
                console.log(list)
                list = JSON.parse(list);
                this.props.TaskAction(list);
            }
        }
    }

    async addToList(element) {
        try {
            let change = 1;
            let list = this.props.actionItems.actionItems;
            // prevArr = JSON.parse(prevArr);
            list.map(function(item) {
                if (element.id ===  item.id) {
                    change = 0;
                }
            })
            if (change === 1) {
                list.push(element);
                this.props.TaskAction(list);
            }
            try {
                await AsyncStorage.setItem('@actionList', JSON.stringify( list));
              } catch (error) {
                // Error saving data
              }
        } catch (e) {
            await AsyncStorage.setItem('@actionList', '[]');
          // saving error
        }
}

    async removeFromList(id) {
        let list = this.props.actionItems.actionItems;

        let filtered = this.props.actionItems.actionItems.filter(function(el) { return el.id != id; }); 
        this.props.TaskAction(filtered);

        try {
            await AsyncStorage.setItem('@actionList', JSON.stringify(filtered));
            } catch (error) {
            // Error saving data
            }
    }


    renderButtons() {
        console.log(this.props.actionItems.actionItems);

        if (this.props.lesson === "Home") {
            return this.props.actionItems.actionItems.map((item) => {
                return (
                    <Button key={item.id} onPress={() => this.removeFromList(item.id)}>{item.name}</Button>
                );
            });
        }
        else {
            return this.state.actionItems.map((item) => {
                return (
                    <Button key={item.id} onPress={() => this.addToList(item)}> {item.name} </Button>
                );
            });
        }
    }


    render() {
        return (
            <View>
                {
                    this.renderButtons()
                }
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    return {actionItems: state.actionItems}
}


    export default connect(mapStateToProps, {TaskAction})(ActionList);
