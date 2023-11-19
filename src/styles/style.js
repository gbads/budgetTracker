import { StyleSheet } from "react-native";

export default StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    output: {
        flex: 2,
    },
    input: {

    },
    item: {

    },
    paragraph: {
        margin: 0,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    add: {
        height: 30,
        width: 30,
    },
    gap: {
        gap: 5,
    },
    spaceAround: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    pseudoBtn: {
        borderRadius: 8,
        backgroundColor: "white",
        padding: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: "#333",
    },
    boxtext: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
    },
    boxinput: {
        height: 40,
        padding: 10,
        borderWidth: 1,
    },
    boxmultiline :{
        minHeight: 100,
        textAlignVertical: 'top',
    },
    formcontainer: {
        flex: 1,
        padding: 30,
    },
    header: {
        fontSize: 30,
        alignSelf: 'center',
    }

})