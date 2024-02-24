import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";

const Index = () => {
    return (
        <View>
            {/* Two Products */}
            <View style={styles.headerContainer}>
                {
                    productsGetir.slice(0,2).map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                }
            </View>
            {/* Bellow Products */}
            <Text style={{color: "gray", fontWeight: "bold", padding: 14}}>Çubuk</Text>
            <View style={styles.contentContainer}>
                {
                    productsGetir.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                }
            </View>
        </View>
    );
};

export default Index;
