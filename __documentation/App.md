# App.js
The `App.js` component is used as the stack navigator in order to navigate between different screen components.

Navigation handling and actions are all done using [React Navigation](https://v1.reactnavigation.org/).

## Modules and Libraries

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

## How it works: Navigation

React Navigation allows for easy navigation between screens (linked by **routes**). Routes are defined by the `name` prop and are linked to React Native components (i.e. `HomeScreen.js`), and we use `navigation.navigate(screenName)` to move to a screen.

You can pass props through navigation routes as well, by invoking:

``` javascript
navigation.navigate(screenName, { myProps: props, ... })
```

Passing props as objects helps you maintain information throughout navigating between pages.