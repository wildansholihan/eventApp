import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// PAGES - START
import Profile from '../pages/profile/profile'
import Home from '../pages/home/home'
// PAGES - END

const Tab = createBottomTabNavigator();

export default function Rooter() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}