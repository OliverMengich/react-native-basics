import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, FlatList, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
    const [enteredMotive, setEnteredMotive] = useState('');
    const [goals, setGoals] = useState<{text:string,id:string}[]>([]); // string[
    function motiveInputHandler(enteredText: string){
        setEnteredMotive(enteredText);
    }
    
    function addMotiveHandler(){
        setGoals(currentGoals => [...currentGoals, {text: enteredMotive,id:Math.random().toString()}]);
        setEnteredMotive('');
    }
    function onPressHandler(item: any){
        console.log('Pressed', item);
        setGoals(currentGoals => currentGoals.filter((goal)=>goal.id!==item.id));
    }
    return (
        <View style={styles.appContainer}>
            <GoalInput enteredMotive={enteredMotive} motiveInputHandler={motiveInputHandler} addMotiveHandler={addMotiveHandler} />
            <View style={styles.goalsContainer}>
                <Text>
                    Your Motives
                </Text>
                <FlatList renderItem={(item)=>(
                    <GoalItem onPressHandler={onPressHandler} item={item} />
                )} keyExtractor={(item)=>{
                    return item.id;
                }} data={goals} alwaysBounceVertical={false}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer:{
        paddingTop: 50,
        paddingHorizontal:16,
        flex: 1
    },
    
    goalsContainer:{
        flex: 4
    }, 
});
