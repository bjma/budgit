# BudgetScreen.js

This is where the bulk of the app happens. All data on items, functions, etc. work here. I could rewrite it to be a little bit more organized, but for now I'm going to keep it like this.

## Modules and Libraries

I wanted to keep everything as functional components, since I wanted to get a good basic grasp of React with hooks. These are the following components and hooks I used:

``` javascript
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
```

As for the modules, `BudgetScreen.js` needs to access `AddItem.js` to add items, and `ListItem.js` for the actual list content:

``` javascript
import ListItem from '../__components/ListItem';
import AddItem from '../__components/AddItem';
import Header from '../__components/Header';
```

## States
For a simple budget sheet, we need to maintain a list of items. Items retain information like price, merchant name, and category. The `category` prop is used to analyze spending habits in `AnalyticsScreen.js`.

In order to delete specific items, I used `Math.random()` to generate random unique IDs so our functions know which item to delete.

``` javascript
const [items, setItems] = useState({
    id: Math.random(),
    text: '',
    price: 0.00,
    category: '',
});
```

## Functions
There are a couple of functions we need in order to have an automated budget sheet. There's `deleteItem()` and `addItem()`.

Delete item simply uses array slicing to filter any items with a specified ID in the `deleteItem()` parameter out of our array of `prevItems`:

``` javascript
const deleteItem = (id) => {
    setItems(prevItems => {
        return prevItems.filter((item)=> item.id != id);
    })
};
```

As for adding items, it's as simple as appending an additional `item`object with some props into our array:

``` javascript
const addItem = (text, price, category) => {
    if (!text || !price) {
        Alert.alert('Error', 'Please enter an item.', { text: 'Ok' });
    } else {
        setItems(prevItems => {
            return [{ id: Math.random(), text, price, category}, ...prevItems];
        });
    }
};
```

How we actually create and pass the `ListItem` object is done through `AddItem.js`.

Additionally, we need some sort of numerical value to quantify our spending. Originally, I used a `budget` state and displayed the difference between a set budget and total amount spent. However, I thought this might be a little bit too stressful to look at, and some people use credit cards, so Aileen and I decided to have the page display the total amount spent.

The `getSumPrice` function basically traverses the array and accumulates the sum of each `item.price`.

``` javascript
const getSumPrice = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += Number(items[i].price);
    }
    return sum.toFixed(2);
};
```

## Conditional navigation
Although I probably should rewrite my code to be a little bit more organized, I started the prototype with just a budget sheet, so most of the props and functions are here. However, a challenge rose when I realized that the way I wrote this component prevented me from passing props directly from the navigation screen. If I wanted to directly access `AddItem.js` from the navigation screen, I'd have to go to `BudgetScreen.js` first, then navigate to `AddItem.js`.

I looked up some documentation on React Navigation's ability to pass props through routes, and decided to use this so I can chain navigations.

If we were working with class components, I could have simply used the method `componentDidMount()`, but since we're using hooks, I used `useEffect()`.

Previously I mentioned that we would have to chain navigations in order to directly access some components from the navigation page, at least without restructuring the project. So, I was left with the problem of determining which route we originally came from. My thought was that, if I had some indicator that told me if I got to `AddItem.js` directly from `BudgetScreen.js` or `HomeScreen.js`, then I could conditionally navigate to `AddItem.js` once the component mounted.

I opted for passing a prop through our `route`, called `addAction`, which contains a boolean indicating if we came from `HomeScreen.js` or not. If `true`, then we immediately navigate to `AddItem.js` upon loading `BudgetScreen.js`.

``` javascript
useEffect(() => {
    const { addAction } = route.params;
    if (addAction) {
         navigation.navigate('AddItem', { addItem: addItem});
    }
});
```

To do this from the Home page, I had to create a custom `onPress` function to navigate to `BudgetScreen.js` while passing through the `addAction` prop as `true`:

``` jsx
const goToAddScreen = () => {
    navigation.navigate('Budget', { addAction: true });
};

<Text style={styles.buttonText}>Add an Expense</Text>
<TouchableOpacity onPress={ goToAddScreen } >
    <Text style={styles.buttonText}>Add an Expense</Text>
</TouchableOpacity>
```