import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageSelector from '../Onbording/LanguageSelector'; // Adjust the path as necessary
import Home from '../Screens/Home'; // Home screen component
import Crops from '../Screens/Crops'; // Crops screen component
import Profile from '../Screens/Profile'; // Profile screen component

// Create both Stack and Tab Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Home, Crops, Profile
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen name="Crops" component={Crops} options={{ title: 'Crops' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

// Stack Navigator for Language Selector and Tab Navigation
const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LanguageSelector"
        component={LanguageSelector}
        options={{ headerShown: false }}
      />
      {/* After selecting the language, load the Tab Navigator */}
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }} // Hide the header for the Tab Navigator
      />
    </Stack.Navigator>
  );
};

export default Navigator;
