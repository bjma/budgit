import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import modules
import HomeScreen from './__routes/HomeScreen';
import BudgetScreen from './__routes/BudgetScreen';
import AnalyticsScreen from './__routes/AnalyticsScreen';
import AddItem from './__components/AddItem';

// import libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Budget' component={BudgetScreen} />
                <Stack.Screen name='AddItem' component={AddItem} />
                <Stack.Screen name='Analytics' component={AnalyticsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
    },
    text: {
        textAlign: 'center',
    }
})

export default App;