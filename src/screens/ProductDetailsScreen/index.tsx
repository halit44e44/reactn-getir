import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from "react-native";
import {Product} from "../../models";
import {RouteProp} from "@react-navigation/native";
import ImageCarousel from "../../components/ImageCarousel";
import ImageDetailBox from "../../components/ImageDetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";


type ProductDetailRouteProp = RouteProp<{ ProductDetails: { product: Product } }, 'ProductDetails'>
type Props = {
    route: ProductDetailRouteProp
}

const Index = ({route}: Props) => {
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(route.params.product)
    }, [])
    if (!product)
        return <ActivityIndicator color="#5d3ebd"/>
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <ImageCarousel images={product?.images}/>
                <ImageDetailBox name={product.name} miktar={product.miktar} fiyat={product.fiyatIndirimli}/>
                <Text style={{color: "#808b99", fontSize: 17, padding: 16, fontWeight: "500"}}>Detaylar</Text>
                <DetailProperty/>
            </ScrollView>
            <View style={{alignSelf: "stretch", backgroundColor: "white"}}>
                <CardButton item={product}/>
            </View>
        </View>
    );
};

export default Index;
