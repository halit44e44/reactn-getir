import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height * 0.064,
        width: "100%",
        flexDirection: "row",
        paddingVertical: height * 0.008,
        paddingHorizontal: 10,
        backgroundColor: "white",
        shadowOpacity:0.3,
        borderBottomColor: "#ececec",
        borderBottomWidth: 1,
        shadowRadius: 3.8,
    },
    typeBoxContainer: {
        paddingHorizontal: 10,
        marginRight: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        height: height * 0.045,
    },
    typeBoxText: {
        fontSize: 13,
        color: "#7849F7",
        fontWeight: "600"
    },
    active: {
        backgroundColor: "#5C3EBC"
    },
    deactive: {
        borderColor: "#efefef",
        borderWidth: 1
    },
    activeColor: {
        color: "#fff"
    }
})

export default styles
