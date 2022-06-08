import React, {useState} from 'react';
import {TextInput} from "react-native";
import {Button, View} from "react-native";
import {StyleSheet} from "react-native";
import uuid from 'react-native-uuid'

const Form = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('')

    return (
       <View>
           <TextInput placeholder={"Введите название задачи"}
                      style={styles.textInput}
                      onChangeText={(text) => setInputValue(text)}
                      value={inputValue}
           />
           <Button title='Добавить задачу'
                   disabled={!inputValue}
                   onPress={() => {
                       addTodo({id: uuid.v4(), text: inputValue})
                       setInputValue('')
                   }}
           />
       </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 0.3
    }
})

export default Form;
