import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesome5, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import HomeNavigator from "./HomeNavigator";
import {TouchableOpacity} from "react-native";




const Tab = createBottomTabNavigator();

const RootNavigator = () => {

    const CustomTabBarButton = () => {
        return (
            <TouchableOpacity style={{
                width: 60,
                height: 60,
                backgroundColor: "#5C3EBC",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                marginTop: -8,
                borderWidth: 1,
                borderColor: "#FFF"
            }}>
                <Entypo name="list" size={32} color="#FFD00C" />
            </TouchableOpacity>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                }
            }}
        >
            <Tab.Screen name="Ana Sayfa" component={HomeNavigator} options={{
                tabBarIcon: ({color}) => (
                    <Entypo name="home" size={24} color={color}/>
                )
            }}/>
            <Tab.Screen name="Search" component={HomeNavigator} options={{
                tabBarIcon: ({color}) => (
                    <Feather name="search" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name="List" component={HomeNavigator} options={{
                tabBarButton: (props) => <CustomTabBarButton {...props} />
            }} />
            <Tab.Screen name="User" component={HomeNavigator} options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="account" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name="Gift" component={HomeNavigator} options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="gift" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    );
};

export default RootNavigator;
