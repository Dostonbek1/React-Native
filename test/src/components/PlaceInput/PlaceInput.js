import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const placeInput = (props) => (
    <TextInput 
        style={styles.placeInput}
        placeholder="Enter First Name"
        value={props.value} 
        onChangeText={props.onChangeText} />
);

const styles = StyleSheet.create({
    placeInput: {
        width: "70%"
    },
})

export default placeInput;