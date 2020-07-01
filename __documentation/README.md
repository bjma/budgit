# Documentation
Here you'll find documentation I wrote for each component I used for this project.

I wrote this project in React Native, using exclusively functional components. Libraries used are `react-native-svg` for the header and `react-navigation` for routing.

This project can be represented as this tree:

```
- Home
    - Add an Expense
        - BudgetScreen
            - AddItem
    - View Expenses
        - BudgetScreen
        - AddItem
    - View Analytics
        - BudgetScreen
            - AnalyticsScreen
```

One problem I have to fix is persisting data only using the frontend. I'm not very familiar with building applications with a backend, so I'm going to try to use a serverless stack so I can persist and retrieve data easily.

## Design principle
We wanted the user interface to be simplistic and sleek, as overcomplicating something as simple as a budgeting sheet can get kind of ugly. Everything is neatly contained, so that users can intuitively figure out how this app works.

## How it works: Navigation

React Navigation allows for easy navigation between screens (linked by **routes**). Routes are defined by the `name` prop and are linked to React Native components (i.e. `HomeScreen.js`), and we use `navigation.navigate(screenName)` to move to a screen.

You can pass props through navigation routes as well, by invoking:

``` javascript
navigation.navigate(screenName, { myProps: props, ... })
```

Passing props as objects helps you maintain information throughout navigating between pages.

## Default container 
The `App.js` component is used as the stack navigator in order to navigate between different screen components.

Navigation handling and actions are all done using [React Navigation](https://v1.reactnavigation.org/).

### Modules and Libraries

There isn't a need for any visual display for navigating between different screens, so we didn't use any React Native modules.

``` javascript
import * as React from 'react';
```

As for component modules, all screens are imported here since we need to navigate between screen to screen.

``` javascript
// import modules
import HomeScreen from './__routes/HomeScreen';
import BudgetScreen from './__routes/BudgetScreen';
import AnalyticsScreen from './__routes/AnalyticsScreen';
import AddItem from './__components/AddItem';
```

We used the following modules from the React Navigation library:

``` javascript
// import libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
```