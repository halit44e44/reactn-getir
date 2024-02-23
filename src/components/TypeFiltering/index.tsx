import React, {useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {Category} from "../../models";
import categoryGetir from "../../../assets/categoryGetir";

const TypeBox = ({setCat, item, activeCategoryName}: { setCat: any, item: string, activeCategoryName: string }) => {
    return (
        <TouchableOpacity
            style={[styles.typeBoxContainer, item == activeCategoryName ? styles.active : styles.deactive]}
            onPress={() => setCat(item)}
        >
            <Text
                style={[styles.typeBoxText, item == activeCategoryName && styles.activeColor]}>{item}</Text>
        </TouchableOpacity>
    )
}


const Index = ({category}: { category: Category }) => {
    const selectedCategory = categoryGetir.find(cat => cat.id === category.id)
    const subCategories = selectedCategory ? selectedCategory.subCategories : []
    const [categories, setCategories] = useState<string[]>(subCategories)
    const [selectCategories, setSelectCategories] = useState<string>("Birlikte İyi Gider")

    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
            {
                categories.map((item: string) => (
                    <TypeBox setCat={setSelectCategories} item={item} activeCategoryName={selectCategories}/>
                ))
            }
        </ScrollView>
    );
}

export default Index;
