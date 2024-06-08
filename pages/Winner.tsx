import { Text, View,TextInput, StyleSheet, Button, } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Route } from "expo-router/build/Route";
import PlayerCount from "@/pages/PlayerCount";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

type MyStackParamList = {
    TestRenderer:{playerCount:Number}
    playerCount:undefined
   Winner:{player:String}
   test:undefined}
   type Props = NativeStackScreenProps<MyStackParamList, 'Winner'>

export default function Winner ({route, navigation}:Props) {
    return(<Text>Winner {route.params.player}</Text>)
}