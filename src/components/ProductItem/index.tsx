import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";
import {Product} from "../../models";
import {useNavigation} from "@react-navigation/native";



const Index = ({item}: { item: Product }) => {
    const navigator = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigator.navigate("ProductDetails", {product:item})}>
            <Image style={styles.image}
                   source={{uri: item.image}}/>
            <View style={styles.viewContainer}>
                <Text style={styles.price}>
                    <Text>₺</Text>{item.fiyat}
                </Text>
                <Text style={styles.discountPrice}>
                    <Text>₺</Text>{item.fiyatIndirimli}
                </Text>
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productTotal}>{item.miktar}</Text>

            <View style={styles.iconContainer}>
                <Entypo style={styles.plusIcon} name="plus" size={24} color="#5D3EBD"/>
            </View>
        </TouchableOpacity>
    );
};

export default Index;
