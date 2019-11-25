// Todo list
import React from 'react';
import { View, Button } from 'react-native';
import data from './actionItems.json'
import AsyncStorage from '@react-native-community/async-storage';
import {TaskAction} from '../../actions';
import {connect} from 'react-redux';

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
            let prevArr = await AsyncStorage.getItem('@actionList');
            prevArr = JSON.parse(prevArr);
            prevArr.map(function(item) {
                if (element.id ===  item.id) {
                    change = 0;
                }
            })
            if (change === 1) {
                prevArr.push(element);
            }
            try {
                await AsyncStorage.setItem('@actionList', JSON.stringify(prevArr));
              } catch (error) {
                // Error saving data
              }
        } catch (e) {
            await AsyncStorage.setItem('@actionList', '[]');
          // saving error
        }
}

    async removeID(element) {
        let prevArr = await AsyncStorage.getItem('@actionList');
            prevArr = JSON.parse(prevArr);
            prevArr.map(function(item) {
                if (element.id ===  item.id) {
                    prevArr.splice(prevArr.indexOf(item));
                }
            })

            try {
                await AsyncStorage.setItem('@actionList', JSON.stringify(prevArr));
              } catch (error) {
                // Error saving data
              }
    }


    renderButtons() {
        console.log(this.props.actionItems.actionItems);

        if (this.props.lesson === "Home") {
            return this.state.actionItems.map((item) => {
                return (
                    <Button key={item.id} title={item.name} onPress={() => this.addToList(item)}></Button>
                );
            });
        }
        else {
            return this.props.actionItems.actionItems.map((item) => {
                return (
                    <Button key={item.id} title={item.name} onPress={() => this.addToList(item)}></Button>
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
