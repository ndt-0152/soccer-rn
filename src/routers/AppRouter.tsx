import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withRepeat,
  withSequence,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import ProfileScreen from '../screens/profile';
import EditProfile from '../screens/editprofile';
import {ButtonRN, ViewRN} from '../components/atoms';
import {StyleSheet} from 'react-native';
import {
  gestureHandlerRootHOC,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AnimatedComponent = gestureHandlerRootHOC(() => {
  const progress = useSharedValue(0);
  const start = useSharedValue(0);
  const active = useSharedValue(0);
  const end = useSharedValue(0);
  const reanimatedStyles = useAnimatedStyle(() => {
    return {transform: [{translateX: progress.value * 255}]};
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{translateX: start.value * 255}],
      backgroundColor: active.value ? 'red' : 'blue',
      width: end.value ? 100 : 50,
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<any>({
    //onStart(event,ctx)=>{}
    onStart: () => {
      start.value = withTiming(Math.random(), {duration: 2000});
    },
    onActive: () => {
      active.value = withTiming(Math.random(), {duration: 2000});
    },
    onEnd: () => {
      end.value = withTiming(Math.random(), {duration: 2000});
    },
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
          progress.value = withSequence(
            withDelay(2000, withSpring(Math.random())),
            withRepeat(withTiming(Math.random(), {duration: 2000}), 3, true),
          );
        }}
      />
      <TapGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.ball, uas]} />
      </TapGestureHandler>
    </ViewRN>
  );
});

const styles = StyleSheet.create({
  ball: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});

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
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: 'lightgreen'},
        }}>
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
