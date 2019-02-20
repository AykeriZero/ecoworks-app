import React from 'react';
import { View } from 'react-native';
import CustomCheckBox from './common/Checkbox';
import data from './TodoTasks.json';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    // TODO: 
    // -integrate this with redux?
    // -make tasks dissapear/cross thru after completing them. Is this Redux too?
    render() {
        return (
            <View>
            {data.tasks.map((item, i) =>
                <CustomCheckBox key={i} text={item} />
            )}
            </View>
            );
        }
    }
    
    export default TodoList;
