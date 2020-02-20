// Todo list
import React from 'react';
import { View, Image } from 'react-native';
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
            let lessonActionList = data[key].tasks;
            this.state = {lessonActionList: lessonActionList};
        }
        else {
            this.state = {actionItems: []};
        }
        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
    }

    async componentDidMount() {
        if (this.props.lesson === "Home") {
            if (this.props.actionItems.actionItems.length === 0) {
                try {
                    let list = await AsyncStorage.getItem('@actionList');
                    list = JSON.parse(list);
                    this.props.TaskAction(list);
                } catch (error) {
                    await AsyncStorage.setItem('@actionList', '[]');
                    this.props.TaskAction([]);
                }
            }
        }
    }

    async addToList(element) {
        try {
            let change = 1;
            let list = this.props.actionItems.actionItems;
            list.map(function(item) {
                if (element.id === item.id) {
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


    buttonExistInActionList(id) {
            let exists = false;
            let list = this.props.actionItems.actionItems;
            list.map(function(item) {
                if (item.id === id) {
                    exists = true;
                }
            })
            return exists;
    }

    renderButtons() {

        let styles = 
        {
            "Health": "#335BFF",   //Blue
            "Comfort": "#F50808",    //Red
            "Energy": "#41F508",    //Green
            "Savings": "#F58908",   //Orange
            "Safety": "#CE08F5"     //Purple
        }

        if (this.props.lesson === "Home") {
            return this.props.actionItems.actionItems.map((item) => {
                let buttonColor = styles[item.category];
                let buttonStyle = {
                    flex: 1,
                    alignSelf: 'stretch',
                    backgroundColor: buttonColor,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#007aff',
                    marginLeft: 5,
                    marginRight: 5,
                    
                  };
                  let imageStyle = {
                      width: 500,
                      height: 500
                  }
                return (
                    <Button key={item.id} customStyle={buttonStyle} onPress={() => this.removeFromList(item.id)} buttonLabel={item.name}>
                        
                    </Button>
                );
            });
        }
        else {
            return this.state.lessonActionList.map((item) => {
                let buttonColor = styles[item.category];
                let disabled = false;
                if (this.buttonExistInActionList(item.id)) {
                    buttonColor = '#DEDEDE';
                    disabled = true;
                }
                let buttonStyle = {
                    flex: 1,
                    alignSelf: 'stretch',
                    backgroundColor: buttonColor,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#007aff',
                    marginLeft: 5,
                    marginRight: 5,
                    
                };

                return (
                    <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                  />
                );
            });
        }
    }


    render() {
        return (
            <View style={{"flex": 1}}>
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
