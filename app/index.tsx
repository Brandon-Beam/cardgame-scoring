import { Text, View,TextInput, StyleSheet } from "react-native";
import React from "react";

const testes = () => {
  const [number, onChangeNumber] = React.useState('');
  const [score, onChangeScore] = React.useState(0);
  const [playerName, onChangePlayerName] = React.useState('name')
  return (

    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems:'center'}}>
    <TextInput
        style={styles.input}
        //onSubmitEditing={()=>{onChangeScore((score+Number(number))), onChangeNumber('')}}
        onChangeText={onChangePlayerName}
        value={playerName}
        placeholder="score goes here"
        
      />
    <Text>{score}</Text>
      <TextInput
        style={styles.input}
        onSubmitEditing={()=>{onChangeScore((score+Number(number))), onChangeNumber('')}}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="score goes here"
        keyboardType="numeric"
      />
      </View>
  )
} 


export default function Index() {
    

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
       flexDirection:'row',
        alignItems: "center",
        
       
      }}
    >
     <>{testes()}</>
      <>{testes()}</>
      <>{testes()}</>
    </View>
  );
}

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