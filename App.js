import * as React from 'react';

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
                <Stack.Screen 
                    name='Home' 
                    component={ HomeScreen } 
                    options={{ 
                        title: 'budgit',
                        headerStyle: {
                            backgroundColor: '#7DCCBE',
                        },
                        headerTitleStyle: { color: '#FFFFF' }
                    }}
                />
                <Stack.Screen 
                    name='Budget' 
                    component={ BudgetScreen } 
                    options={{ title: 'budgit' }}
                />
                <Stack.Screen 
                    name='AddItem' 
                    component={ AddItem } 
                    options={{ title: 'budgit' }} 
                />
                <Stack.Screen 
                    name='Analytics' 
                    component={ AnalyticsScreen } 
                    options={{ title: 'budgit' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;