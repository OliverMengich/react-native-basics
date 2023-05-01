import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
type Props={
    item:any,
    onPressHandler:(item:any)=>void
}
function GoalItem({item,onPressHandler}:Props) {
    return (
        <Pressable onPress={()=>onPressHandler(item.item)} style={({pressed})=>[styles.goalItem,{opacity:pressed?0.5:1}]} >
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>{item.item.text}</Text>
            </View>
        </Pressable>

    );
}
const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText:{
        color: '#fff',
        fontSize: 16
    }
});
export default GoalItem;