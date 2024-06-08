import { Text, View,TextInput, StyleSheet, Button, } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Route } from "expo-router/build/Route";
import PlayerCount from "@/pages/PlayerCount";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import Winner from "./Winner";

type MyStackParamList = {
    TestRenderer:{playerCount:Number}
    playerCount:undefined
   Winner:{player:String}}
   type Props = NativeStackScreenProps<MyStackParamList, 'TestRenderer'>

   
   const test = (index:number,{route, navigation}:Props) => {
       const [number, onChangeNumber] = React.useState('');
       const [score, onChangeScore] = React.useState(0);
       const [playerName, onChangePlayerName] = React.useState('')
       const winCheck = () => {
        if((score+Number(number))>= 10000){navigation.navigate('Winner',{player:playerName})} else {console.log('not yet', playerName)}
       }
    return (
  
      <View
      key={index}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems:'center'}}>
      <TextInput
          style={styles.input}
          //onSubmitEditing={()=>{onChangeScore((score+Number(number))), onChangeNumber('')}}
          onChangeText={onChangePlayerName}
          value={playerName}
          placeholder="Name"
          
        />
      <Text>{score}</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={()=>{onChangeScore((score+Number(number))), onChangeNumber(''), winCheck() }}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="score goes here"
          keyboardType="numeric"
        />
        </View>
    )
  } 

export default function TestRenderer ({route, navigation}:Props) {
    return(<GestureHandlerRootView><ScrollView>
     <Text> {Array.from({length:Number(route.params.playerCount)}, (_, index) => (
      test(index,{route, navigation})))}
  </Text></ScrollView></GestureHandlerRootView>)}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      
    },
    rotate: {
    
    }
  })