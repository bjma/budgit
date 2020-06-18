import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, Button, TouchableOpacity } from 'react-native';

// import libaries
import { useNavigation } from '@react-navigation/native';

// import modules
import ListItem from '../__components/ListItem';
import AddItem from '../__components/AddItem';

const BudgetScreen = ({ navigation }) => {

    // STATES:
    // items
    const [items, setItems] = useState([{
        id: Math.random(),
        text: '',
        price: 0.00,
        category: '',
    }]);

    // total budget
    const [budget, setBudget] = useState(0);

    /**
     * Removes item of specified ID via filtering all items
     * that don't have the ID value specified in the parameter
     * @param { Number } id - Unique ID of item
     */
    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter((item )=> item.id != id);
        })
    };

    /**
     * Prepends item with specified values to FlatList
     * @param { String } text
     * @param { Number } price
     */
    const addItem = (text, price, category) => {
        if (!text || !price) {
            Alert.alert('Error', 'Please enter an item.', { text: 'Ok' });
        } else {
            setItems(prevItems => {
                return [{ id: Math.random(), text, price, category}, ...prevItems];
            });
        }
    };

    /**
     * Calculates current total spent
     * @param { String } items
     */
    const getSumPrice = (items) => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += Number(items[i].price);
        }
        return sum;
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.budget}
                defaultValue={String((budget - getSumPrice(items)).toFixed(2))}
                onChangeText={(budget) => setBudget(budget)}
                keyboardType={'numeric'}
            />
            <Text style={styles.text}>Total Budget Remaining</Text>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddItem', { addItem: addItem })} >
                    <Text style={styles.btnText}>
                        Add Item
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                style={styles.list}
                data = { items }
                renderItem = { ({ item }) => (
                    <ListItem 
                        item={item} 
                        deleteItem={deleteItem} 
                    />
                )} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },

    budget: {
        marginTop: 40,
        padding: 5,
        fontSize: 24,
        textAlign: 'center',
    },
    
    text: {
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

    listContainer: {

    },

    list: {
        paddingTop: 15,
    },
});

export default BudgetScreen;