import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputBox = (props) => {

    const { value , changeText, addTodo } = props

    return (
    <TextInput
    value={value}
    onChangeText={changeText}
    onEndEditing={addTodo}
    style={styles.input}
    placeholder="ㅇㄹ"
    returnKeyType="done"
    />

    )};

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        padding: 15,
    }},
    );

export default InputBox;