import React from "react";
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import product_data from './product_data.json';
import styles from './Productdatastyles';
import Productdata from "./Productdata";

const App = () => {
    const renderNews = ({ item }) => <Productdata products={item} />;
    return (
        <View>
            <Text style={styles.container}>PATIKA STORE</Text>
            
            <TextInput placeholder="Search.." />
            <FlatList
                numColumns={2}
                keyExtractor={item => item.u_id.toString()}
                data={product_data}
                renderItem={renderNews}
            />
        </View>
    )
};

export default App;
