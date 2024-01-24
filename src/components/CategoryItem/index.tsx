import React from 'react';
import {Image, Text, TouchableOpacity, Dimensions} from "react-native";
import styles from "./styles";
import {Category} from "../../models";

type categoryItemProps = {
    item: Category
}

const Index = ({item}:categoryItemProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{uri: item.src}}
                style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export default Index;

