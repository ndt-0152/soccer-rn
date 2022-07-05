import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import React from 'react';
import DetailsScreen from '../screens/details';
import {TextRN} from '../components/atoms';

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const SettingsNav = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={() => {
          return <TextRN>Settings</TextRN>;
        }}
      />
    </SettingsStack.Navigator>
  );
};

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="Settings" component={SettingsNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
