import React from 'react';
import {Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import {connect} from "react-redux";
import {Product} from "../../models";

const {width, height} = Dimensions.get('window')

const Index = ({cartItems}: {cartItems:{product:Product, quantity:number}[]}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <FlatList
                    data={cartItems}
                    renderItem={({item}) => <CartItem product={item.product}/>}
                    showsVerticalScrollIndicator={false}
                />
                <Text style={{color: "#5D3EBD", fontSize: 17, padding: 16, fontWeight: "bold"}}>Önerilen Ürünler</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} style={{backgroundColor: "white"}}>
                    {
                        productsGetir.slice(0,4).map((item,index) => (
                            <ProductItem key={index} item={item} />
                        ))
                    }
                </ScrollView>
            </ScrollView>
            <View style={{height: height * 0.12, flexDirection: "row", alignItems: "center", paddingHorizontal: "4%"}}>
                <TouchableOpacity style={{height: height * 0.06, flex: 3, backgroundColor: "#5D3EBD", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 8, borderBottomLeftRadius: 8, marginTop: -10}}>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>
                        Devam
                    </Text>
                </TouchableOpacity>

                <View style={{flex:1, backgroundColor: "white", marginTop: -10, alignItems: "center", justifyContent: "center", height: height * 0.06, borderTopRightRadius: 8, borderBottomRightRadius: 8,}}>
                    <Text style={{color: "#5D3EBD", fontWeight: "bold", fontSize: 16}}>
                        ₺ 13.00
                    </Text>
                </View>
            </View>
        </View>
    );
};

const mapStateToProps = (state: any) => {
    const {cartItems} = state
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps, null)(Index);
