import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import {connect} from "react-redux";
import {Product} from "../../models";
import * as actions from '../../redux/actions/cartActions'

type cartButtonType = {
    addItemToCart: (a: Product) => void;
    item: Product
}

const Index = ({item, addItemToCart}: cartButtonType) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.buttonContainer}>
                <Text style={styles.text}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItemToCart: (product: Product) =>
            dispatch(actions.addToCart({product, quantity: 1}))
    }
}

export default connect(null, mapDispatchToProps)(Index);
