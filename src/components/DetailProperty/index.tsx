import React, {useState} from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import {Feather} from "@expo/vector-icons";

const Index = () => {
    const [details, setDetails] = useState<string[]>(
        ["Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti", "İçindekiler", "Besin Değerleri", "Kullanım", "Ek Bilgileri"]
    )

    const TextComponent = ({detail, index}: { detail: string, index: number }) => {
        return (
            <View style={[styles.textContainer, index === details.length - 1 && {borderBottomWidth: 0} ]}>
                <Text style={index === 0 ? styles.miniText : styles.text}>{detail}</Text>
                {
                    index !== 0 &&
                    <Feather name="chevron-down" size={20} color="#9F9F9F" />
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                details.map((item, index) => (
                    <TextComponent key={index} index={index} detail={item}/>
                ))
            }
        </View>
    );
};

export default Index;
