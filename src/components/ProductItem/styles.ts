import {Dimensions, StyleSheet} from "react-native";
const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: width * 0.29,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 10,
        marginBottom: 6
    },
    image: {
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: "gray"
    },
    viewContainer: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
    },
    price: {
        fontSize: 11,
        color: "#747990",
        textDecorationLine: "line-through"
    },
    discountPrice: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 4
    },
    productName: {
        fontSize: 12,
        fontWeight: "600",
        marginTop: 5
    },
    productTotal: {
        color: "#747990",
        fontSize: 12,
        marginTop: 4,
        fontWeight: "500"
    },

    iconContainer: {
        width: 30,
        height: 30,
        borderWidth: 0.3,
        borderColor: "lightgray",
        backgroundColor: "white",
        position: "absolute",
        right: -6,
        top: -6,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 3.8,
        shadowOpacity: 0.05
    },
    plusIcon: {

    }
})

export default styles;

