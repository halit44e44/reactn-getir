import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height * 0.11,
    },
    buttonContainer: {
        backgroundColor: "#5D3EBD",
        margin: 13,
        height: height * 0.07,
        borderRadius: height * 0.01,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "700"
    }
})

export default styles
