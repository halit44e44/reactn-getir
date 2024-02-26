import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

const Index = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.text}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Index;
