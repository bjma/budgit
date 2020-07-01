import React, { useState } from 'react';

// import components
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

// import custom modules
import Header from './Header';


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
            <View style={{flex: 1,}}>
                <Header customStyles={styles.svgCurve} />
            </View>
            <Text style={styles.headerText}>Add an Expense</Text>
            <View style={styles.cardContainer}>
                <Text style={styles.itemContent}>Merchant Name</Text>
                <View style={styles.itemData}>
                    <TextInput 
                        placeholder="e.g. Safeway"
                        style={styles.input}
                        onChangeText={onChangeText}
                    />
                </View>

                <Text style={styles.itemContent}>Amount Spent</Text>
                <View style={styles.itemData}>
                    <TextInput 
                        placeholder="e.g. 52.99"
                        style={styles.input}
                        onChangeText={onChangePrice}
                    />
                </View>  

                <Text style={styles.itemContent}>Category</Text>
                <View style={styles.itemData}>
                    <TextInput 
                        placeholder="e.g. Groceries"
                        style={styles.input}
                        onChangeText={onChangeCategory}
                    />
                </View>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <TouchableOpacity style={styles.btn} onPress={() => combinedOnPress()} >
                    <Text style={styles.btnText}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingBottom: Dimensions.get('window').height / 10,
    },

    cardContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15, paddingTop: 40,
        marginLeft: Dimensions.get('window').width * 0.15, marginTop: 5, marginBottom: 10,
        width: '70%',
        /* card texture styles */
        borderRadius: 8, 
        shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 3, shadowOffset: { width: 0, height: 2, },
    },

    itemData: {
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 50,
    },

    itemContent: {
        textAlign: 'center',
        fontSize: 18, fontWeight: '500',
        color: '#1FA68A',
    },

    input: {
        height: 30,
        padding: 1,
        margin: 1,
        fontSize: 16,
        textAlign: 'center',
        borderColor: '#F7F7F7', borderBottomWidth: 2, borderRadius: 20,
    },

    btn: {
        height: 42, width: 150,
        padding: 4,
        margin: 20, marginBottom: 60,
        backgroundColor: '#FFFFFF',
        borderColor: '#1FA68A', borderWidth: 1, borderRadius: 8,
    },

    btnText: {
        paddingTop: 6,
        textAlign: 'center',
        color: '#1FA68A',
        fontSize: 16,
    },

    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width,
    },

    headerText: {
        color: '#FFFFFF', fontSize: 24,
        textAlign: 'center', 
        marginBottom: 10, 
        paddingBottom: 5,
    }
})

export default AddItem;