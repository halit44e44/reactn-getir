import React, {useState} from 'react';
import {ScrollView} from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import {Category} from "../../models";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";

const Index = (
    props: {
        route: {
            params: {
                category:Category
            }
        }
    }
) => {

    const [category, setCategory] = useState<Category>(props.route.params.category)
    return (
        <ScrollView>
            <CategoryFiltering category={category} />
            <TypeFiltering category={category} />
            <ProductsContainer />
        </ScrollView>
    );
};

export default Index;
