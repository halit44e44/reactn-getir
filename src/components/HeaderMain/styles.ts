import {StyleSheet, Dimensions} from "react-native";

const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064,
        backgroundColor: "#F7D102"
    },
    headerOne: {
        height: height * 0.064 ,
        width: "80%",
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        borderBottomRightRadius: height * 0.032,
        borderTopRightRadius: height * 0.032,
    },
    headerOneView: {
        flexDirection: "row",
        alignItems: "center",
        borderLeftWidth: 2,
        borderLeftColor: "#F3F2FD",
        paddingLeft: 10
    },
    headerImage: {
        width: 30,
        height: 30,
        margin: 10
    },

    headerTwo: {
        width: "25%",
        height: height * 0.064,
        left: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default styles;
