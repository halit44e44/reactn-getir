import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {Image} from "react-native";

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
                headerTitle: () => (<Image source={require("../../assets/getirlogo.png")} style={{ width: 70, height: 30 }} />),
            }} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
