import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// PAGES - START
import Profile from '../pages/profile/profile';
import Home from '../pages/home/home';
import Favorite from '../pages/favorite/favorite';
// PAGES - END

const Tab = createBottomTabNavigator();

class BottomTabsScreen extends PureComponent {
  render() {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              } else if (route.name === 'Favorite') {
                iconName = 'favorite';
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorite" component={Favorite} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
  }
}

export default BottomTabsScreen;