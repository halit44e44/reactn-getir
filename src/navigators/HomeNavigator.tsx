import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {Image, Text} from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#5C3EBC",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                color: "white"
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerTitle: () => (
                    <Image source={require("../../assets/getirlogo.png")} style={{width: 70, height: 30}}/>),
            }}/>
            <Stack.Screen name="CategoryDetails" component={CategoryFilterScreen} options={{
                headerBackTitleVisible: false,
                headerTintColor: "#FFF",
                headerTitle: () => (<Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}> Ürünler </Text>)
            }}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;
