import { Text, View,TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Route } from "expo-router/build/Route";
import PlayerCount from "@/pages/PlayerCount";
import TestRenderer from "@/pages/MainArea";
import Winner from "@/pages/Winner";


type MyStackParamList = {
 TestRenderer:{playerCount:Number}
 playerCount:undefined
 Winner:{player:String}
 test:undefined}
type Props = NativeStackScreenProps<MyStackParamList, 'playerCount'>



const Stack = createNativeStackNavigator<MyStackParamList>()

export default function Index() {
  const [count, onChangeCount] = React.useState('');

  return (<NavigationContainer independent={true}>
    <Stack.Navigator>
<Stack.Screen
name='playerCount'
component={PlayerCount}
    />
    <Stack.Screen
name='TestRenderer'
component={TestRenderer}
    />
    <Stack.Screen
name='Winner'
component={Winner}
    />
    
    </Stack.Navigator>
    </NavigationContainer>
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