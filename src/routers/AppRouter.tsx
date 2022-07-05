import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import ProfileScreen from '../screens/profile';
import EditProfile from '../screens/editprofile';
import {ButtonRN, ViewRN} from '../components/atoms';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AnimatedComponent = () => {
  const progress = useSharedValue(0);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {transform: [{translateX: progress.value * 255}]};
  });

  return (
    <ViewRN style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {height: 100, width: 100, backgroundColor: 'blue'},
          reanimatedStyles,
        ]}
      />
      <ButtonRN
        title="View More"
        onPress={() => {
          progress.value = withTiming(Math.random(), {duration: 2000});
        }}
      />
    </ViewRN>
  );
};

const HomeNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const ProfileNav = () => {
  const navigation = useNavigation<any>();
  const handlePressProfileIcon = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => {
            return (
              <Icon name="edit" size={16} onPress={handlePressProfileIcon} />
            );
          },
        }}
      />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
};

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeNav}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="home" size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNav}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="person" size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Animated"
          component={AnimatedComponent}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icon name="person" size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
