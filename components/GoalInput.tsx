import { type } from 'os';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
type Props={
    enteredMotive:string,
    motiveInputHandler:(enteredText:string)=>void,
    addMotiveHandler:(event:any)=>void
}
function GoalInput({enteredMotive,motiveInputHandler,addMotiveHandler}: Props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={enteredMotive} onChangeText={motiveInputHandler} style={styles.textInput} placeholder="Entr you Motive" />
            <Button onPress={addMotiveHandler} title="Add" />
        </View> 
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    textInput:{
        borderWidth:1,
        padding: 10,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
    },
});
export default GoalInput;