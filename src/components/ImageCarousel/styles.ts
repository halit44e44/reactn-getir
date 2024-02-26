import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
        height: height * 0.25,
        paddingTop: 25
    },
    flatContainer: {
        width: width * 0.5,
        height: height * 0.2,
    },
    image: {
        width: width * 0.5,
        height: height * 0.2,
        resizeMode: "stretch"
    },
    dotContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 30
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginBottom: 5
    }
})

export default styles
