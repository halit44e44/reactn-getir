import React from 'react';
import {Dimensions, Text, View} from "react-native";

const {height, width} = Dimensions.get("window")

type DetailBoxProps = { name: string, miktar: string, fiyat: number }

const Index = ({name, miktar, fiyat}: DetailBoxProps) => {
    return (
        <View style={{height: height * 0.14, backgroundColor: "#FFF", alignItems: "center"}}>
            <Text style={{
                paddingTop: 12,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5D3EBD"
            }}>₺{fiyat}</Text>
            <Text style={{fontWeight: "600", fontSize: 16, paddingTop: 12,}}>{name}</Text>
            <Text style={{color: "#7c7c7c", fontWeight: "600", marginTop: 8}}>{miktar}</Text>
        </View>
    );
};

export default Index;
