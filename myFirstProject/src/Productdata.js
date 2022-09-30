import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './Productdatastyles';
import product_data from './product_data.json';


const Productdata = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.products.imgURL}} />
            <Text style={styles.title}>{props.products.title}</Text>
            <Text style={styles.price}>{props.products.price}</Text>
            <Text style={styles.inStock}>{props.products.inStock}</Text>
        </View>
    )
}

export default Productdata;

// source={{uri: props.imgURL}}