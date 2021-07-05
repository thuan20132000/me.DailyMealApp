import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/index.js';
import RecipeDetail from '../screens/Recipe/RecipeDetail.js';



const RootStack = createStackNavigator();



function RootNavigation() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="RecipeDetail" component={RecipeDetail} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation