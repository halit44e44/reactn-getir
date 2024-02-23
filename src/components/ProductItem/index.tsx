import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";

const Index = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: "https://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg"}} />
            <View style={styles.viewContainer}>
                <Text style={styles.price}>
                    <Text>₺</Text>12.95
                </Text>
                <Text style={styles.discountPrice}>
                    <Text>₺</Text>11.45
                </Text>
            </View>
            <Text style={styles.productName}>Granny Smit Elma</Text>
            <Text style={styles.productTotal}>5 Adet</Text>

            <View style={styles.iconContainer}>
                <Entypo style={styles.plusIcon} name="plus" size={24} color="#5D3EBD" />
            </View>
        </TouchableOpacity>
    );
};

export default Index;
