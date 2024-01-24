import React, {useState} from 'react';
import CategoryItem from "../CategoryItem";
import {StyleSheet, View} from "react-native";
import {Category} from "../../models";
import categoryGetir from "../../../assets/categoryGetir";

const Index = () => {

    const [categories, setCategories] = useState<Category[]>(() => categoryGetir)

    return (
        <View style={styles.container}>
            {
                categories.map((item: Category) => (
                    <CategoryItem key={item.id} item={item}/>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap"
    }
})

export default Index;
