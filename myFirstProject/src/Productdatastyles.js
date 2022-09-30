import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container: {
        color: 'purple',
        fontSize: 45,
        margin: 10,
    },
    image: { height: Dimensions.get('window').height / 4 },
    title: {
        fontSize: 12,
        color: 'dark black',
        fontWeight: 'bold',
        margin: 10,
        borderRadius: 10,
    },
    price: {
        fontSize: 15,
        color: 'gray'
    },
})