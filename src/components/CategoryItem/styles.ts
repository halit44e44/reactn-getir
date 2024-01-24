import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get("window")


const styles = StyleSheet.create({
    container: {
        width: width * 0.25,
        height: width * 0.24,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    image: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: 8,
    },
    text: {
        fontSize: 12,
        color: "#616161",
        fontWeight: "500"
    }
})

export default styles
