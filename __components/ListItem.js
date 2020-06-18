import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const ListItem = ({ item, deleteItem }) => { 
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <View style={styles.propContainer}>
                    <Text style={styles.listItemText}>{item.text}</Text>
                    <Text style={styles.listItemText}>{'$' + item.price}</Text>
                </View>
                <Button
                    title='Delete'
                    onPress={() => deleteItem(item.id)}
                />
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    propContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 50,
    },
});

export default ListItem;