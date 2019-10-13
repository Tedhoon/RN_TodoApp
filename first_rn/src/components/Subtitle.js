import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// props = {title: "앞에서 입력한 것들"}
// const {title} = props;
const Subtitle = ({title}) => {
    return (
    <View>
        <Text style={styles.subtitletext}>{title}</Text>
    </View>
    )};

    const styles = StyleSheet.create({
        subtitletext: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#3f4e66',
        }},
        );

export default Subtitle;