import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import {Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";
import {getFocusedRouteNameFromRoute, useNavigation} from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import {connect} from "react-redux";
import {Product} from "../models";
import * as actions from "../redux/actions/cartActions"

const Stack = createStackNavigator();
const {height, width} = Dimensions.get("window")


const MyStack = ({navigation, route, cartItems, clearCart}: { cartItems: { product: Product, quantity: number }[], clearCart: () => void }) => {
    // const navigation = useNavigation()
    const tabHiddenRoutes = ["ProductDetails", "CartScreen"]

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route)
        if (tabHiddenRoutes.includes(routeName)) {
            navigation.setOptions({tabBarStyle: {display: "none"}})
        } else {
            navigation.setOptions({tabBarStyle: {display: "flex", height: 80}})
        }
    }, [navigation, route])

    const [totalPrice, setTotalPrice] = useState(0)
    const getProductsPrice = () => {
        let total: number = 0;
        cartItems.forEach(cartItems => {
            total = (cartItems.product.fiyat + total)
        })
        total = total.toFixed(2)
        setTotalPrice(total)
    }
    useEffect(() => {
        getProductsPrice()
    }, [cartItems, navigation, route])


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
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{
                        width: width * 0.22,
                        height: 33,
                        backgroundColor: "white",
                        marginRight: width * 0.03,
                        borderRadius: 9,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image style={{width: 23, height: 23, marginLeft: 6}}
                               source={require("../../assets/cart.png")}/>
                        <View style={{
                            marginLeft: 4,
                            flex: 1,
                            height: 33,
                            backgroundColor: "#f3eff3",
                            borderTopRightRadius: 9,
                            borderBottomRightRadius: 9,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{color: "#5D3EBD", fontWeight: "bold", fontSize: 12,}}>₺{totalPrice}</Text>
                        </View>
                    </TouchableOpacity>
                )
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

            <Stack.Screen name="CartScreen" component={CartScreen} options={{
                headerBackTitleVisible: false,
                headerTintColor: "#FFF",
                headerTitle: () => (
                    <Text style={{color: "#ffffff", fontSize: 17, fontWeight: "bold"}}> Sepetim </Text>),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft: 12}}>
                        <Ionicons name="close" size={24} color="white"/>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => clearCart()} style={{paddingRight: 12}}>
                        <FontAwesome name="trash" size={24} color="white"/>
                    </TouchableOpacity>
                )
            }}/>
        </Stack.Navigator>
    );
};

const mapStateToProps = (state: any) => {
    const {cartItems} = state
    return {
        cartItems: cartItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearCart: () => dispatch(actions.clearCart())
    }
}

function HomeNavigator({navigation, route, cartItems, clearCart}: {clearCart:() => void}) {
    return <MyStack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)
