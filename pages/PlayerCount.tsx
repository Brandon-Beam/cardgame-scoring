import { View,TextInput, Button,StyleSheet } from "react-native";
import React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type MyStackParamList = {
    TestRenderer:{playerCount:Number}
    playerCount:undefined
   Winner:{player:String}}
   type Props = NativeStackScreenProps<MyStackParamList, 'playerCount'>

export default function PlayerCount({route, navigation}:Props){
    const [number, onChangeNumber] = React.useState('');
    return (<>
  <TextInput
          style={styles.input}
          onSubmitEditing={()=>{navigation.navigate('TestRenderer',{playerCount:Number(number)})
            }}
          onChangeText={onChangeNumber}
          placeholder="score goes here"
          keyboardType="numeric"
        />
        <Button title='Go To Game'
        onPress={()=>
          navigation.navigate('TestRenderer',{playerCount:Number(number)})
        }></Button>
        
        </>
  
  )
  
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