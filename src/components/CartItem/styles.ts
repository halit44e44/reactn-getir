import {Dimensions, StyleSheet} from "react-native";

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: width * 0.33,
        backgroundColor: "white",
        borderBottomWidth: 0.3,
        borderBottomColor: "gray"
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: width * 0.22,
        height: height * 0.1,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: "gray"
    },
    content: {
        flex: 2,
        justifyContent: "center",
        marginLeft: 4
    },
    name: {
        fontSize: 14,
        fontWeight: "600"
    },
    miktar: {
        color: "gray",
        fontWeight: "600"
    },
    fiyatIndirimli: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#5c40ae",
        marginTop: 4
    },
    count: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    minus: {
        backgroundColor: "white",
        width: width * 0.07,
        height: height * 0.04,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: "gray",
        borderWidth: 0.3,
        shadowColor: "#5c3fba",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    countText: {
        width: width * 0.07,
        height: height * 0.04,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5c3ebc",
    },
    plus: {
        backgroundColor: "white",
        width: width * 0.06,
        height: height * 0.04,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: "gray",
        borderWidth: 0.3,
        shadowColor: "#5c3fba",
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 1
        }
    }
})

export default styles
