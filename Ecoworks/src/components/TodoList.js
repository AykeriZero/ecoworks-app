// Todo list
import React from 'react';
import { View } from 'react-native';
import CustomCheckBox from './common/Checkbox';
import store from '../store';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: store.getState().taskList.arr };
        store.subscribe(() => {
            const arrin = store.getState().taskList.arr;
            this.setState({
              arr: arrin
            });
            console.log(this.state.arr);
          });
    }
    
    // TODO: 
    // -integrate this with redux?
    // -make tasks dissapear/cross thru after completing them. Is this Redux too?
    render() {
        return (
            <View>
            {this.state.arr.map((item, i) =>
                <CustomCheckBox key={i} text={item} id={i} />
            )}
            </View>
            );
        }
    }
    export default TodoList;
