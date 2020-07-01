import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { onChange } from 'react-native-reanimated';

const AddItem = ({ route, navigation }) => {
    /* Get props */
    const { addItem } = route.params;

    /* States */ 
    const [text, setText] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const onChangeText = (textValue) => {
        setText(textValue);
    };

    const onChangePrice = (priceValue) => {
        setPrice(priceValue);
    };

    const onChangeCategory = (categoryValue) => {
        setCategory(categoryValue);
    }

    const combinedOnPress = () => {
        addItem(text, price);
        navigation.navigate('Budget', { addAction: false });
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.itemContent}>Add Item</Text>
            <View style={styles.itemData}>
                <TextInput 
                    placeholder="e.g. Avocado"
                    style={styles.input}
                    onChangeText={onChangeText}
                />
            </View>

            <Text style={styles.itemContent}>Add Price</Text>
            <View style={styles.itemData}>
                <TextInput 
                    placeholder="e.g. 3.99"
                    style={styles.input}
                    onChangeText={onChangePrice}
                />
            </View>  

            <Text style={styles.itemContent}>Add Category</Text>
            <View style={styles.itemData}>
                <TextInput 
                    placeholder="e.g. Groceries"
                    style={styles.input}
                    onChangeText={onChangeCategory}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.btn} onPress={() => combinedOnPress()} >
                    <Text style={styles.btnText}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    itemData: {
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 50,
    },

    itemContent: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },

    input: {
        height: 40,
        padding: 1,
        margin: 1,
        fontSize: 16,
        textAlign: 'center',
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
})

export default AddItem;