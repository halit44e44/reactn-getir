import React, {useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";
import categoryGetir from "../../../assets/categoryGetir";
import {Category} from "../../models";

const CategoryBox = ({item, active}: { item: Category, active: Category }) => {
    return (
        <View style={[styles.boxContainer, item.id == active.id && styles.boxActive]}>
            <Text style={styles.boxText}>{item.name}</Text>
        </View>
    )
}


const Index = ({category}: { category: Category }) => {
    const [categories, setCategories] = useState<Category[]>(() => categoryGetir)
    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {
                categories.map((item) => (
                    <CategoryBox key={item.id} item={item} active={category}/>
                ))

            }
        </ScrollView>
    );
};

export default Index;
