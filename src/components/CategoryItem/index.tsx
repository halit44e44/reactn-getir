import React from 'react';
import {Image, Text, TouchableOpacity, Dimensions} from "react-native";
import styles from "./styles";
import {Category} from "../../models";
import {useNavigation} from "@react-navigation/native";

type categoryItemProps = {
    item: Category
}
const Index = ({item}:categoryItemProps) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity testID="category-item" style={styles.container} onPress={() => {
            // @ts-ignore
            navigation.navigate("CategoryDetails", {category:item})
        }}>
            <Image
                source={{uri: item.src}}
                style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export default Index;

