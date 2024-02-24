import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {Image, Text, TouchableOpacity} from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from '@expo/vector-icons';
import {getFocusedRouteNameFromRoute, useNavigation} from "@react-navigation/native";

const Stack = createStackNavigator();

const MyStack = ({navigation, route}) => {
    // const navigation = useNavigation()
    const tabHiddenRoutes = ["ProductDetails"]

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route)
        if (tabHiddenRoutes.includes(routeName)) {
            navigation.setOptions({tabBarStyle: {display: "none"}})
        } else {
            navigation.setOptions({tabBarStyle: {display: "flex", height: 80}})
        }
    }, [navigation, route])


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
                headerTitle: () => (<Text style={{color: "#fff", fontSize: 17, fontWeight: "bold"}}> Ürünler </Text>),
            }}/>

            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{
                headerBackTitleVisible: false,
                headerTintColor: "#FFF",
                headerTitle: () => (
                    <Text style={{color: "#ffffff", fontSize: 17, fontWeight: "bold"}}> Ürün Detayı </Text>),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft: 12}}>
                        <Ionicons name="close" size={24} color="white"/>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity style={{paddingRight: 12}}>
                        <AntDesign name="heart" size={24} color="#44239FFF"/>
                    </TouchableOpacity>
                )
            }}/>
        </Stack.Navigator>
    );
};

export default function HomeNavigator({navigation, route}) {
    return <MyStack navigation={navigation} route={route}/>
}
