import * as React from 'react';

// import modules
import HomeScreen from './__routes/HomeScreen';
import BudgetScreen from './__routes/BudgetScreen';
import AnalyticsScreen from './__routes/AnalyticsScreen';
import AddItem from './__components/AddItem';

// import libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

// export reference for navigation from stack navigator
const navigationRef = React.createRef();
// function for navigating
const navigate = (name, params) => {
    navigationRef.current && navigationRef.current.navigate(name, params);
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer ref={ navigationRef }>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{ 
                    title: 'budgit',
                    headerStyle: {
                        backgroundColor: '#7DCCBE',
                    },
                    headerTintColor: '#FFFFFF',
                }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={ HomeScreen } 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name='Budget' 
                    component={ BudgetScreen }
                    options={{ 
                    }}
                />
                <Stack.Screen 
                    name='AddItem' 
                    component={ AddItem }
                    options={{
                        headerLeft: () => (
                            <HeaderBackButton 
                                onPress = {() => {
                                    navigate('Home');
                                }}
                            />
                        )
                    }}
                />
                <Stack.Screen 
                    name='Analytics' 
                    component={ AnalyticsScreen } 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;