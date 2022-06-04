
import 'react-native-gesture-handler'
import * as React from "react";
import {
    StyleSheet,
    Text,
    FlatList,
    ImageBackground,
} from 'react-native';
import Header from "../components/Header";
import {SafeAreaView} from "react-native";
import {useState} from "react";
import TodoItem from "../components/TodoItem";
import Form from "../components/Form";

export default function Todo() {
    const [todoItems, setTodoItems] = useState([])

    const addTodo = (newItem) => {
        setTodoItems([
            ...todoItems,
            {...newItem}
        ])
    }
    const deleteTodo = (id) => {
        setTodoItems((newList) => {
            return newList.filter((todoItems) => id !== todoItems.id)
        })
    }



    return (
        <SafeAreaView style={styles.app}>
            <Header/>
            <ImageBackground
            source={require('../assets/backGround.jpg')}
            style={styles.bg}
            >
                <Form addTodo={addTodo}/>
                {
                    todoItems.length ? <Text style={{color: 'white', fontSize: 20, display: 'flex', justifyContent: 'center'}}>Всего: {todoItems.length}</Text> : null
                }
                <FlatList data={todoItems}
                          keyExtractor={item => item.id}
                          renderItem={({item}) => (
                              <TodoItem item={item} deleteTodo={deleteTodo}/>
                          )}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    app: {
        flex: 1
    }
})
