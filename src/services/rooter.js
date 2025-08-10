import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabsScreen from './rooterBottomTab';

import EventDetail from '../pages/eventDetail/eventDetail';

// MAIN STACK
const MainStack = createNativeStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Main" component={BottomTabsScreen} />
      <MainStack.Screen name="EventDetail" component={EventDetail} />
    </MainStack.Navigator>
  );
};

// ROOTER
class Rooter extends Component {
  render() {
    return (
        <NavigationContainer>
          <MainStackScreen />
        </NavigationContainer>
    );
  }
}

export default Rooter;