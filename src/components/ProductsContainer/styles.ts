import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {

    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white"
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        flexWrap: "wrap",
        paddingVertical: 10
    }
})

export default styles
