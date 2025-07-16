import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// PAGES - START
import ProductDetail from '../pages/productDetail/productDetail';
import Home from '../pages/home/home';
import Cart from '../pages/cart/cart';
// PAGES - END

const Stack = createStackNavigator();

export default function Rooter() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}