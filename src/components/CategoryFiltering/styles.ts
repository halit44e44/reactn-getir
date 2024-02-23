import {Dimensions, StyleSheet} from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: height * 0.064,
        backgroundColor: "#7849F7"
    },
    boxContainer: {
        paddingHorizontal: 9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    boxText: {
        fontSize: 14,
        color: "#FFF",
        fontWeight: "600"
    },
    boxActive: {
        borderBottomColor: "#FFD00C",
        borderBottomWidth: 2.5,
    }
})

export default styles
