import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Product} from "../../models";
import styles from "./styles";

const Index = ({product}: { product: Product }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: product.image}}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.miktar}>{product.miktar}</Text>
                <Text style={styles.fiyatIndirimli}>₺{product.fiyatIndirimli}</Text>
            </View>
            <View style={styles.count}>
                <TouchableOpacity style={styles.minus}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#5c37bd"}}>—</Text>
                </TouchableOpacity>
                <View style={styles.countText}>
                    <Text style={{color: "#fff", fontWeight: "bold"}}>2</Text>
                </View>
                <TouchableOpacity style={styles.plus}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#5c37bd"}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Index;
