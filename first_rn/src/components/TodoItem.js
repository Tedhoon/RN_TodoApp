import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const TodoItem = ({text , isComplete ,changeComplete , deleteItem}) => {
    
    return(
        <View style={styles.todoContainer}>
            <View style={styles.lineContainer}>
                <View style={styles.makerow}>
                    <TouchableOpacity onPress={changeComplete} >
                        <AntDesign name={isComplete ? "checkcircle":"frowno" } size={20} style={styles.checkbtn}/>
                    </TouchableOpacity>

                    <Text style={styles.todoitem}>{text}</Text>
                </View>
                
                <View>
                    <TouchableOpacity onPress = {deleteItem}>
                        <AntDesign name="closecircle" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop:20,
        borderBottomWidth:1,
        width: width-40
    },
    todoitem: {
        fontSize: 20,
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent :'space-between',
        alignItems : 'center',

    },
    checkbtn : {
        marginRight : 20,
    },
    makerow:{
        flexDirection:'row',
    },
    
    });

export default TodoItem;