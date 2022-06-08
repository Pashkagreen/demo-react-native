import React from 'react';
import {TouchableOpacity, Text} from 'react-native'
import {StyleSheet} from "react-native";

const TodoItem = ({item, deleteTodo}) => {
    return (
        <TouchableOpacity style={styles.todo} onLongPress={() => deleteTodo(item.id)}>
            <Text style={styles.text}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <Text style={{fontSize: 22}}>&#128465;</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        fontSize: 18
    }
})

export default TodoItem;
