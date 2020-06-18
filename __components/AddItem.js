import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// component for dealing with adding items
// add item button
const AddItem = ({ item, addItem }) => {
    // state variables
    const [text, setText] = useState('');
    const [price, setPrice] = useState(0);

    // onChange handler for adding items
    // textValue is text in the input field, setText is passed to App.js
    const onChangeText = (textValue) => {
        setText(textValue);
    };
    
    const onChangePrice = (priceValue) => {
        setPrice(priceValue);
    };



    // later add choices:
    // 1. add new
    // 2. add from history (sorted by most spent categories)
    // newItem = name, category, price
    return (
        <View>
            <View style={styles.itemData}>
                <TextInput 
                    placeholder="Add Item..." 
                    style={styles.input}
                    onChangeText={onChangeText}
                />
                <TextInput 
                    placeholder="Add Price..." 
                    style={styles.input}
                    keyboardType={'numeric'}
                    onChangeText={onChangePrice}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => addItem(text, price)} >
                    <Text style={styles.btnText}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        padding: 1,
        margin: 1,
        fontSize: 16,
        /*borderBottomWidth: 0.35,
        borderBottomColor: '#0E6251'*/
    },
    btn: {
        backgroundColor: '#76D7C4',
        padding: 9,
        margin: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    itemData: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 50,
    },
});

export default AddItem;