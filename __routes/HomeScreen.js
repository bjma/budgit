import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

// import libraries
import { NavigationActions } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
    /**
     * Variant route access that chains navigation
     * to the budget screen, then the add item screen
     */
    const goToAddScreen = () => {
        navigation.navigate('Budget', { addAction: true });
    };

    // const goToAnalytics

    return (
        <View style={ styles.container }>
            <Image
                style={styles.tinyLogo}
                source={require('../__img/budgit_logo.png')}
            />
            <View style={styles.welcomeText}>
                <Text 
                style={{fontSize: 40, marginTop: 35, color: '#1FA68A',}}>
                    Hello!
                </Text>
                <Text 
                style={{fontSize: 20, margin: 5, color: '#1FA68A',}}>
                    What would you like to do?
                </Text>
            </View>
            <TouchableOpacity
                onPress={ goToAddScreen }
                style={styles.button}
            >
                <Text style={styles.buttonText}>Add an Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Budget', { addAction: false })}
                style={styles.button}
            >
                <Text style={styles.buttonText}>View Expenses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Analytics')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>View Analytics</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', 
        paddingBottom: 70, 
        backgroundColor: '#FFFFFF'
    },

    button: {
        alignItems: 'center', justifyContent: 'center',
        height: 42, width: 175,
        margin: 20, marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#1FA68A', borderWidth: 1, borderRadius: 5,
    },
    buttonText: {
        color: '#1FA68A',
        fontSize: 15,
    },
    welcomeText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    tinyLogo: {
        marginTop: 60,
        height: 145,
        width: 145,
    }
});

export default HomeScreen;